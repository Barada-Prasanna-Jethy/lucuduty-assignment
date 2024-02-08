import axios from "axios";

export const fetchProductsApi = () =>
  axios.get("https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory");
