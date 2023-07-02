import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ApiQuotes.module.css';
export default function ApiQuotes() {
  const [quoteList, setQuoteList] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(0);

  async function fetchQuotes() {
    try {
      const params = new URLSearchParams({
        limit: '10',
        maxLength: '80',
      });

      const response = await axios.get(`https://api.quotable.io/quotes?${params.toString()}`);
      if (response.status !== 200) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const quotes = response.data.results;
      setQuoteList(quotes);
    } catch (error) {
      console.error(error);
      setQuoteList([{ content: "Oops... Something went wrong" }]);
    }
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(prevIndex => (prevIndex + 1) % quoteList.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [quoteList]);

  return (
    <div>
      
      {quoteList.length > 0 && (
        <div className={styles.quoteContainer}>
          <p>{quoteList[quoteIndex].content}</p>
          <p className={styles.author}>{quoteList[quoteIndex].author}</p>
        </div>
      )}
    </div>
  );
}








/* import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ApiQuotes() {
  const [quoteList, setQuoteList] = useState([]);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchQuotes() {
    try {
      const params = new URLSearchParams({
        limit: '20',
        maxLength: '80',
      });

      const response = await axios.get(`https://api.quotable.io/quotes?${params.toString()}`);
      if (response.status !== 200) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const quotes = response.data.results;
      setQuoteList(quotes);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setQuoteList([{ content: "Oops... Something went wrong" }]);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // Controlla se le citazioni sono già state recuperate
    if (quoteList.length === 0 && isLoading) {
      fetchQuotes();
    }
  }, [quoteList, isLoading]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex(prevIndex => (prevIndex + 1) % quoteList.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [quoteList]);

  return (
    <div>
      
      {!isLoading && quoteList.length > 0 && (
        <div>
          <h2>{quoteList[quoteIndex].content}</h2>
          <p>{quoteList[quoteIndex].author}</p>
        </div>
      )}
    </div>
  );
}
 */