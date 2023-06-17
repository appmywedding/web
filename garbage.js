
  //   const setInterceptor = (user) => {
  //     axios.interceptors.request.use(
  //       (config) => {
  //         ++callsMade;
  //         if (callsMade > MAX_REQUESTS && !isTimeToSendRequestsOver) {
  //           // To make sure there are no calls in an uncontrolable loop
  //           throw Error("Too many requests");
  //         }
  //         if (timeout) {
  //           setIsTimeToSendRequestsOver(false);
  //           timeout.clearTimeout();
  //           timeout = setTimeout(() => {
  //             setIsTimeToSendRequestsOver(true);
  //             timeout.clearTimeout();
  //             timeout = null;
  //           }, MAX_TIME_TO_SEQUENTIAL_REQUESTS);
  //         }
  //         if (!user) {
  //           return config;
  //         }
  //         if (!config.headers) {
  //           config.headers = {};
  //         }
  //         config.headers.uid = user.uid;
  //         return config;
  //       },
  //       (err) => {
  //         return Promise.reject(err);
  //       }
  //     );
  //   };