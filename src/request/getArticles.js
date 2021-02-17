import axios from 'axios';

const getArticles = async (type) => {
  try {
    const articles = await axios.get(`http://localhost:5000/articles/${type}`);
    console.log(articles.data)
    return articles.data;
  } catch (error) {
    console.log(error);
  }
}

export default getArticles;