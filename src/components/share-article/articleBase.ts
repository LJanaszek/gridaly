import { useEffect } from "react";

export interface ArticleBase{
    id: number;
    url: string;
}

export const Articles: ArticleBase[] =
[
	{
		"id": 1,
		"url": "https://www.gridaly.com/products/mobile-app"
	},
	{
		"id": 2,
		"url": "https://www.gridaly.com/products/landing-page-registration"
	},
	{
		"id": 3,
		"url": "https://www.gridaly.com/solutions/networking-matchmaking"
	},
	{
		"id": 4,
		"url": "https://www.gridaly.com/customer-stories"
	},
	{
		"id": 5,
		"url": "https://www.gridaly.com/features"
	}
]




