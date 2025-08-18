export interface ErrorResponse {
  message?: string;
}

export interface ThunkConfig {
  rejectValue: ErrorResponse;
}
