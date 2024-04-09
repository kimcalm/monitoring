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
          <div>
            <p className="text-3xl">주요 키워드</p>
            <NewsWordcloud />
          </div>
          <div>
            <p className="text-3xl">주요 뉴스</p>
            <NewsList />
          </div>
        </div>
      </div>
      </>
    );
  }

  export default News;