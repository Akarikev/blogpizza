/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import LoadingUI from "./LoadingUI";
import Image from "next/image";
import Link from "next/link";

type articlesType = {
  author?: string;
  description: string;
  content: string;
  source?: {
    id?: string;
    name?: string;
  };
  title: string;
  url?: string;
  urlToImage: string;
  publishedAt: string;
};

function NewsPage() {
  const [articleData, setArticleData] = useState<articlesType[]>([]);
  const fetchNews = async () => {
    const ApiKey = process.env.NEXT_PUBLIC_NEWS_API_KEY;
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?language=en&pageSize=5&apiKey=${ApiKey}`
    );
    return response.data;
  };
  const { isLoading, error, data } = useQuery(["articles"], fetchNews, {
    onSuccess: (data) => {
      // Set the article data when the query is successful
      setArticleData(data?.articles);
    },
  });

  if (isLoading) {
    return <LoadingUI />;
  }
  const formatDateTime = (timestamp: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZoneName: "short",
    };
    return new Date(timestamp).toLocaleDateString(undefined, options);
  };

  return (
    <div className=" px-10 md:px-28 lg:px-52 mt-5">
      <div>
        <div>
          {articleData.slice(1, 2).map((article) => {
            const formattedDateTime = formatDateTime(article.publishedAt);
            return (
              <div
                key={article.url}
                className="flex lg:flex-col flex-col gap-5 justify-between lg:items-start xl:flex-row items-center "
              >
                <img
                  src={article.urlToImage}
                  alt={article.title}
                  width={400}
                  height={400}
                  className="rounded-md shadow-md lg:object-cover object-cover lg:items-center"
                />
                <div>
                  <h1 className="uppercase font-semibold text-2xl text-pink-600 w-full">
                    {article.title}
                  </h1>

                  <p className="text-muted-foreground">{article.description}</p>

                  <div className="flex flex-col">
                    <Link
                      href={article.url}
                      className="hover:underline decoration-pink-300"
                    >
                      <small className="text-pink-400">{article.content}</small>
                    </Link>

                    <small className="text-pink-400 mt-1">
                      Source : {article.source?.name}
                      <small className="ml-2 ">Author: {article.author}</small>
                      <small className="ml-2 font-semibold">
                        {formattedDateTime}
                      </small>
                    </small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="">
          <div>
            <h1 className="pt-10 pb-10 font-semibold text-xl text-pink-600">
              Latest News
            </h1>

            <div className="flex flex-row justify-between ">
              {articleData.map((article) => {
                return (
                  <div key={article.author}>
                    <div>
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-[200px] h-[100px]"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
