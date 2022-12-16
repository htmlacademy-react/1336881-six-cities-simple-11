export enum AppRoute {
  Root = '/',
  Login = '/login',
  Room = '/offer/:id',
  NotFound = '/404'
}

export enum ApiRoute {
  Login = '/login',
  Comments = '/comments',
  Hotels = '/hotels'
}

export enum UrlMarker {
  Default = 'img/pin.svg',
  Current = 'img/pin-active.svg'
}

export enum CommentLength {
  Min = 50,
  Max = 300
}

export enum NameSpace {
  user = 'user',
  comment = 'comment',
  offers = 'offers',
}
