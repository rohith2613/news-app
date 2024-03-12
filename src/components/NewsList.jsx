import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from './Loader';

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('us'); // Default country is 'us'
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
        );

        // Extract date and time components
        const formattedNews = response.data.articles.map((article) => ({
          ...article,
          formattedDate: new Date(article.publishedAt).toLocaleDateString(),
          formattedTime: new Date(article.publishedAt).toLocaleTimeString(),
        }));

        setNews(formattedNews);
      } catch (error) {
        console.error('Error fetching news:', error);
        setError('Error fetching news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [country]);

  const handleCountryChange = (selectedCountry) => {
    setCountry(selectedCountry);
    setLoading(true); // Reset loading state when changing the country
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  return (
    <div className="container mx-auto mt-8 bg-slate-100">
      {/* Dropdown button for country selection */}
      <div className="mb-4 bg-slate-100 p-2 w-64">
        <label htmlFor="country" className="mr-3 text-black">
          Select Country:
        </label>
        <select className='bg-gray-300'
          id="country"
          value={country}
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="us">United States</option>
          <option value="in">India</option>
          <option value="rs">Russia</option>
          <option value="ch">China</option>
          <option value="br">Britan</option>
          {/* Add more countries as needed */}
        </select>
      </div>
      <h1 className="text-3xl underline text-red-500 text-center font-bold mb-4">Just out News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.map((article, index) => (
          <article key={index} className="overflow-hidden rounded-lg border border-gray-100 m-2 bg-white shadow-sm">
            <img
              alt=""
              src={article.urlToImage}
              className="h-56 w-full object-fill"
            />

            <div className="p-4 sm:p-6">
              <a target='_blank' rel="noopener noreferrer" href={article.url}>
                <h3 className="text-lg font-semibold text-gray-900">
                  {article.title}
                </h3>
              </a>

              <p className="mt-2 line-clamp-3 text-md/relaxed font-serif text-gray-700">
                {article.description}
              </p>
              
              <p className='mt-2 line-clamp-3 text-sm/relaxed text-gray-700'>{`Published on ${article.formattedDate} at ${article.formattedTime}`}</p>

              <a target='_blank' rel="noopener noreferrer" href={article.url} className="group mt-4 inline-flex p-2 rounded-lg items-center gap-1 text-sm font-medium text-blue-600 hover:bg-gray-600 hover:text-blue-300">
                Find out more
                <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                  &rarr;
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
