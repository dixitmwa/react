import React, { useState } from 'react'
import InputFieldComponent from '@/common-components/inputField/inputField'
import { Box, Checkbox, FormControlLabel, FormLabel, Grid, MenuItem, OutlinedInput, Select, Step, StepLabel, Stepper, Typography } from '@mui/material'
import CustomCheckbox from '@/common-components/customCheckbox/customCheckbox';
import CustomButton from '@/common-components/customButton';
import { educations, ethnicityList, fiveHours, healthRate, initialCheckBoxObjects, levelOfIncomes, oneHours, selfEsteemRate } from '@/constant/constant';
import { useFormik } from 'formik';
import * as Yup from "yup";
import DatePickerComponent from '@/common-components/datePicker/datePickerComponent';



const ProfileForm = () => {
  const [checkBoxObjects, setCheckboxObjects] = useState(initialCheckBoxObjects)

  const ProfileValidationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("First name is required"),
    DOB: Yup.string().required("Date of birth is required"),
    education: Yup.string().required("Education is required"),
    checkForm: Yup.string().required("Please check this"),
  });


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      DOB: "",
      education: "",
      checkForm: false,
      firtsLangEng: "",
      gender: "",
      anyMedication: "",
      anyHeadInjury: "",
      levelOfIncome: "",
      dominantHand: "",
      ethnicity: "",
    } as unknown as ProfileFormDetails,
    validateOnChange: true,
    validationSchema: ProfileValidationSchema,
    enableReinitialize: true,
    // regular profile
    onSubmit: async (values: ProfileFormDetails) => {
      const profileFormValue: ProfileFormDetails = {
        firstName: values.firstName,
        lastName: values.lastName,
        DOB: values.DOB,
        education: values.education,
        checkForm: values.checkForm,
        firtsLangEng: values.firtsLangEng,
        gender: values.gender,
        anyMedication: values.anyMedication,
        anyHeadInjury: values.anyHeadInjury,
        levelOfIncome: values.levelOfIncome,
        dominantHand: values.dominantHand,
        ethnicity: values.ethnicity,
      };
    },
  });



  const handleIncomeChange = (e: any, type: string) => {
    switch (type) {
      case "levelOfIncome":
        formik.setFieldValue("levelOfIncome", e.target.value)
        break;
      case "education":
        formik.setFieldValue("education", e.target.value)
        break;
      case "dominantHand":
        formik.setFieldValue("dominantHand", e.target.value)
        break;
      case "ethnicity":
        formik.setFieldValue("ethnicity", e.target.value)
        break;
    }
  }


  const handleValueChange = (id: number, index: number) => {
    const updatedValues = checkBoxObjects.map((checkbox) => {
      if (checkbox.id === id) {
        const updatedOptions = checkbox.options.map((option, i) => {
          option.selected = i === index;
          if (option.selected === true) {
            formik.setFieldValue(checkbox.name, option.label)
          }
          return option;
        });
        return { ...checkbox, options: updatedOptions };
      }
      return checkbox;
    });
    setCheckboxObjects(updatedValues);
  };


  return (
    <Box className="profile-outer-main-box-wrap profile-form-out-wrap">
      <Box className="profile-form-layout">
        <Typography fontSize={13} fontWeight={600}>Please fill out the form to ensure the most accurate scoring results for the test. Required fields are marked with *</Typography>
        <Typography variant='body1' fontSize={12} mt={1.5}>To utilize the assessments on this site you need to read and agree to the conditions for taking any of the assessments provided by CogQuiz.com. The tests on this site are considered and provided solely as experimental assessments. They are not clinically or medically diagnostic or for use in treating or preventing clinical of medical conditions. If you have questions or concerns about the results or our reporting of your results on any assessment taken on this site, you may want to print your results and discuss them with a licensed medical of psychological professional. CogQuiz.com, CogQuiz, LLC, or the owners of this company and/or website are not responsible for any errors or misinterpretation of the results by users of this website and assessments. By checking accept below you are acknowledging that you have read and understood the conditions for taking any assessment provided on this website.</Typography>
        <FormControlLabel control={<Checkbox {...formik.getFieldProps("checkForm")} size="small" name='checkForm' />} label={<Typography className='checkbox-label' >I have read and understood</Typography>} />
        <Box>
          {/* personal details */}
          <Grid container xs={9} rowSpacing={2} columnSpacing={3} mt={2}>
            <Grid item xs={6}>
              <InputFieldComponent
                placeHolder='First Name'
                label="* First Name:"
                {...formik.getFieldProps("firstName")}
                name='firstName'
                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              />
            </Grid>
            <Grid item xs={6}>
              <InputFieldComponent placeHolder='Last Name' label="* Last Name:"
                {...formik.getFieldProps("lastName")}
                name='lastName'
                error={formik.touched.lastName && Boolean(formik.errors.lastName)}

              />
            </Grid>
            <Grid item xs={6}>

              <DatePickerComponent
                name="DOB"
                labelText="* Birth Date:"
                onChange={(option) => {
                  if (option) {
                    formik.setFieldValue(
                      "DOB",
                      option.format("YYYY-MM-DD")
                    );
                  }
                }}
              />
            </Grid>
            <Grid item xs={6} display={"flex"} flexDirection={"column"} gap={"10px"}>
              <FormLabel className='profile-label'
              >* Education:</FormLabel>
              <Select
                {...formik.getFieldProps("education")}
                name='education'
                value={formik.values.education}
                placeholder='Select Education'
                onChange={(e) => handleIncomeChange(e, "education")}
                input={<OutlinedInput />}
                error={formik.touched.education && Boolean(formik.errors.education)}
                style={{ height: '37px', borderRadius: "6px" }}
              >
                {educations.map((education) => (
                  <MenuItem
                    key={education}
                    value={education}
                  >
                    {education}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>

          {/* checkbox */}
          <Grid container xs={9} rowSpacing={2} columnSpacing={3} mt={2}>
            {
              checkBoxObjects.map((object) => {
                return (
                  <Grid key={object.id} item xs={6}>
                    <FormLabel className='profile-label'>{object.title}</FormLabel>
                    <CustomCheckbox {...formik.getFieldProps(object.name)}
                      name={object.name} selectedId={object.id} selectedValues={object.options} onChange={handleValueChange} />
                  </Grid>
                )
              })
            }
          </Grid>

          {/* Level of income */}
          <Grid container xs={12} spacing={2} mt={2}>
            <Grid item xs={4} display={"flex"} flexDirection={"column"} gap={"10px"}>
              <FormLabel className='profile-label'>Level of Income:</FormLabel>
              <Select
                value={formik.values.levelOfIncome}
                onChange={(e) => handleIncomeChange(e, "levelOfIncome")}
                input={<OutlinedInput />}
                style={{ height: '37px', borderRadius: "6px" }}
              >
                {levelOfIncomes.map((income) => (
                  <MenuItem
                    key={income}
                    value={income}
                  >
                    {income}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={4} display={"flex"} flexDirection={"column"} gap={"10px"}>
              <FormLabel className='profile-label'>Dominant Hand</FormLabel>
              <Select
                value={formik.values.dominantHand}
                onChange={(e) => handleIncomeChange(e, "dominantHand")}
                input={<OutlinedInput />}
                style={{ height: '37px', borderRadius: "6px" }}
              >
                {levelOfIncomes.map((income) => (
                  <MenuItem
                    key={income}
                    value={income}
                  >
                    {income}
                  </MenuItem>
                ))}
              </Select>
            </Grid>

            <Grid item xs={4} display={"flex"} flexDirection={"column"} gap={"10px"}>
              <FormLabel className='profile-label'>Ethnicity</FormLabel>
              <Select
                value={formik.values.ethnicity}
                onChange={(e) => handleIncomeChange(e, "ethnicity")}
                input={<OutlinedInput />}
                style={{ height: '37px', borderRadius: "6px" }}
              >
                {ethnicityList.map((ethnicity) => (
                  <MenuItem
                    key={ethnicity}
                    value={ethnicity}
                  >
                    {ethnicity}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>

          <Box>

            <Box mt={5} textAlign={"center"}>
              <Typography color={"#3D3D3D"} fontSize={"14px"} fontWeight={600}>How many hours a week do you engage in stimulating activity such as follows </Typography>
              <Typography color={"#69A6D1"} fontSize={"14px"} fontWeight={600} mb={5}>reading, writing, playing cards, intellectual conversations, computer use</Typography>
              <Stepper activeStep={1} alternativeLabel>
                {fiveHours.map((label) => (
                  <Step completed={false} key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box mt={5} textAlign={"center"}>
              <Typography color={"#3D3D3D"} fontSize={"14px"} fontWeight={600} mb={5}>How many hours a week do you exercise?</Typography>
              <Stepper activeStep={2} alternativeLabel>
                {oneHours.map((label) => (
                  <Step completed={false} key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box mt={5} textAlign={"center"}>
              <Typography color={"#3D3D3D"} fontSize={"14px"} fontWeight={600} mb={5}>How would you rate your self-esteem:</Typography>
              <Stepper activeStep={2} alternativeLabel>
                {selfEsteemRate.map((label) => (
                  <Step completed={false} key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <Box mt={5} textAlign={"center"}>
              <Typography color={"#3D3D3D"} fontSize={"14px"} fontWeight={600} mb={5}>How would you rate your overall health:</Typography>
              <Stepper activeStep={2} alternativeLabel>
                {healthRate.map((label) => (
                  <Step completed={false} key={label}>
                    <StepLabel >{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </Box>
        </Box>
        <Box textAlign={"end"} mt={4}>
          <CustomButton className="save-profile" onBtnClick={formik.handleSubmit} btnText="Save Profile" />
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileForm