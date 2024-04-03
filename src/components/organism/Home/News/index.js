import SearchDate from "../../../molecules/Home/News/SearchDate";
import NewsList from "../../../molecules/Home/News/NewsList";
import NewsWordcloud from "../../../molecules/Home/News/WordCloud";

function News() {
    return (
      <>
      <div>
        <div className="bg-slate-100 flex">
            <SearchDate />
        </div>
        <div className="bg-slate-100 flex"> 
          <NewsWordcloud />
          <NewsList />
        </div>
      </div>
      </>
    );
  }

  export default News;