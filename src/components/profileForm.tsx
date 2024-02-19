import React, { useState } from 'react'
import InputFieldComponent from '@/common-components/inputField/InputField'
import { Box, Checkbox, FormControlLabel, FormLabel, Grid, MenuItem, OutlinedInput, Select, Step, StepLabel, Stepper, Typography } from '@mui/material'
import CustomCheckbox from '@/common-components/customCheckbox/CustomCheckbox';
import CustomButton from '@/common-components/CustomButton';
import { educations, ethnicityList, fiveHours, healthRate, initialCheckBoxObjects, levelOfIncomes, oneHours, selfEsteemRate } from '@/constant/constant';


const ProfileForm = () => {
  const [selectedEducation, setSelectedEducation] = useState("")
  const [checkBoxObjects, setCheckboxObjects] = useState(initialCheckBoxObjects)
  const [incomeFields, setIncomeFields] = useState({
    selectedLevelIncome: "",
    selectedDominantHand: "",
    selectedEthnicity: "",
  })

  const handleEducationChange = (e: any) => {
    setSelectedEducation(e.target.value)
  }

  const handleIncomeChange = (e: any, type: string) => {
    switch (type) {
      case "levelOfIncome":
        setIncomeFields({ ...incomeFields, selectedLevelIncome: e.target.value })
        break;
      case "dominantHand":
        setIncomeFields({ ...incomeFields, selectedDominantHand: e.target.value })
        break;
      case "ethnicity":
        setIncomeFields({ ...incomeFields, selectedEthnicity: e.target.value })
        break;
    }
  }

  const handleValueChange = (id: number, index: number) => {
    const updatedValues = checkBoxObjects.map((checkbox) => {
      if (checkbox.id === id) {
        const updatedOptions = checkbox.options.map((option, i) => {
          option.selected = i === index;
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
        <FormControlLabel control={<Checkbox size="small" />} label={<Typography className='checkbox-label' >I have read and understood</Typography>} />
        <Box>
          {/* personal details */}
          <Grid container xs={9} rowSpacing={2} columnSpacing={3} mt={2}>
            <Grid item xs={6}>
              <InputFieldComponent placeHolder='First Name' label="* First Name:" />
            </Grid>
            <Grid item xs={6}>
              <InputFieldComponent placeHolder='Last Name' label="* Last Name:" />
            </Grid>
            <Grid item xs={6}>
              <InputFieldComponent placeHolder='First Name' label="* Birth Date:" type='date' />
            </Grid>
            <Grid item xs={6} display={"flex"} flexDirection={"column"} gap={"10px"}>
              <FormLabel className='profile-label'>* Education:</FormLabel>
              <Select
                value={selectedEducation}
                placeholder='Select Education'
                onChange={handleEducationChange}
                input={<OutlinedInput />}
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
                    <CustomCheckbox selectedId={object.id} selectedValues={object.options} onChange={handleValueChange} />
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
                value={incomeFields.selectedLevelIncome}
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
                value={incomeFields.selectedDominantHand}
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
                value={incomeFields.selectedEthnicity}
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
          <CustomButton className="save-profile" btnText="Save Profile" />
        </Box>
      </Box>
    </Box>
  )
}

export default ProfileForm