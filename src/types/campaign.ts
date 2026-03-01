export type CampaignCategory =
  | "Health Awareness"
  | "Rare Disease Aid"
  | "Child Health";

export type CampaignStatus = "active" | "completed";

export interface Campaign {
  id: string;
  title: string;
  category: CampaignCategory;
  description: string;
  goalAmount: number;
  raisedAmount: number;
  icon: string;
  image: string;
  status: CampaignStatus;
  highlights: string[];
}
