import store from "../store/store";

export default async (to, from, next) => {
  await store.dispatch("auth/ActionCheckToken");
  document.title = `${to.name} - Academic Control`;


  const logado = store.getters["auth/hasToken"];
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  if (logado && to.path === "/login") {
    console.log("1 if de verificação")
    next({
      path: "/user",
    });
    return;
  }  
  if (requiresAuth == false) {
    console.log("2 if de verificação")
    next();
    return;
  }

  if (!logado) {
    console.log("3 if de verificação")
    next({
      path: "/",     
    });
  } else {
    next();
  }
};
