export enum DispatchActionType {
  AUTH_REGISTER = "AUTH_REGISTER",
  AUTH_LOGIN = "AUTH_LOGIN",
  AUTH_LOGIN_TOKEN = "AUTH_LOGIN_TOKEN",
  AUTH_VERIFY = "AUTH_VERIFY",
  USER_STATUS = "GET_APP_STATUS",
  SPONSORS_LIST = "SPONSORS_LIST",
  // Application form
  APPLICATION_UPLOAD_RESUME = "APPLICATION_UPLOAD_RESUME",
  APPLICATION_MISSING_RESUME = "APPLICATION_MISSING_RESUME",
  APPLICATION_DISPLAY_NAME_AVAILABLE = "APPLICATION_DISPLAY_NAME_AVAILABLE",
  APPLICATION_SUBMIT_FORM = "APPLICATION_SUBMIT_FORM",
  // Save application section data
  APPLICATION_SAVE_BASIC = "APPLICATION_SAVE_BASIC",
  APPLICATION_SAVE_ESSAY = "APPLICATION_SAVE_ESSAY",
  APPLICATION_SAVE_EXPERIENCE = "APPLICATION_SAVE_EXPERIENCE",
  APPLICATION_SAVE_LOGISTICS = "APPLICATION_SAVE_LOGISTICS",
  APPLICATION_SAVE_PORTFOLIO = "APPLICATION_SAVE_PORTFOLIO",
  APPLICATION_SAVE_SCHOOL = "APPLICATION_SAVE_SCHOOL",
  APPLICATION_SAVE_WORK_AUTH = "APPLICATION_SAVE_WORK_AUTH"
}
