
export interface Winner {
  id: string;
  name: string;
  amount: number;
  timestamp: Date;
}

export interface PrizeConfig {
  amount: number;
  initialCount: number;
}
