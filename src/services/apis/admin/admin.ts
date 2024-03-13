import { REQUEST_METHODS, doFetch } from "../fetcher";
import { ADMIN_API_ENDPOINTS } from "./adminAPIEndPoints";

export default {
    fetchAllUserService: (data: Pagination) =>
        doFetch(`${ADMIN_API_ENDPOINTS.USER_FETCH}?page=${data.page}&pageSize=${data.pageSize}`, REQUEST_METHODS.GET),
}