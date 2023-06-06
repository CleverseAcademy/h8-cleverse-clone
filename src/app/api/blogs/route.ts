import { IBlogProps } from "@/app/components/Blog";
import { NextResponse } from "next/server";

const blogs: IBlogProps[] = [
  {
    author: "Arken",
    createdAt: new Date("2023-03-30"),
    description: "In 2022, the DEX trading volume reached $1.2T. However, it is unclear where this volume originated from and what kind of trading behavior was exhibited by users. What trading behavior did users engage in and why did they engage in this behavior?",
    readingTimeSec: 180,
    tags: ["web3", "defi-review"],
    title: "Uncovering Trading Behaviors on DEX: The DeFi Review January 2023",
    image: "https://storage.googleapis.com/cleverse-cms/trading_behavior_thumbnail_de5ddbc5f2/trading_behavior_thumbnail_de5ddbc5f2.png"
  }
]

export const GET = () => NextResponse.json(blogs)