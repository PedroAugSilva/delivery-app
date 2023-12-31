import { NextFunction, Request, Response } from "express";

export const middleware = (req: Request, res: Response, next: NextFunction) => {
  const path = req.url;
  const hasSession = req.cookies["delivery-app-atividade-pw.session"];

  if (hasSession) {
    if (path === "/signin" || path === "/signup" || path === "/employee/signin" || path === "/employee/signup") {
      return res.redirect("/");
    } else {
      return next();
    }
  } else {
    if (path === "/signin" || path === "/signup") {
      return next();
    } else if (path === "/employee/signin" || path === "/employee/signup") {
      return res.redirect("/employee/signin");
    }
    else {
      return res.redirect("/signin");
    }
  }
};
