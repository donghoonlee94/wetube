import routes from './routes';
import multer from 'multer';

// dest or storage : 파일이 저장될 위치를 뜻함.
const multerVideo = multer({ dest: 'uploads/videos/' });
const multerAvatar = multer({ dest: "uploads/avatars/" });

// res.locals.{변수} 를 등록함으로 전역에서 해당 값을 참고할 수 있음.
export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  next();
};


export const onlyPublic = (req, res, next) => {
  if (req.user) {
    return res.redirect(routes.home);
  }
  return next();
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    return next();
  }
  return res.redirect(routes.home);
};

// single : 하나의 파일만 , 인자는 input의 name을 인자로 받음. 해당 name으로 들어오는 파일에 대한 처리.
export const uploadVideo = multerVideo.single('videoFile');
export const uploadAvatar = multerAvatar.single("avatar");