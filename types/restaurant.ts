interface LogoObj {
  fields: {
    file: {
      url: string;
    };
  };
  sys: {
    id: string;
  };
}

export interface RestaurantContent {
  fields: {
    deliveryUrl: string;
    logo: LogoObj;
    name: string;
    pickupUrl: string;
    restaurant: string;
    service1: string;
    service2: string;
  };
  sys: {
    id: string;
  };
}
