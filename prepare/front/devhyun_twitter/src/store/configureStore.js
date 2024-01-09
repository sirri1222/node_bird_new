const ConfigureStore = () => {};
const wrapper = createWrapper(ConfigureStore, {
  debug: process.env.NODE_ENV === "development",
});
export default wrapper;
