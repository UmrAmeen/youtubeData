import SearchBar from "./searchBar";
import MyPage from "./myFormPage";
// import db from "./lib/sqlite/db";
export default function Home() {
  // const rows = db.prepare("SELECT * FROM youtube").all();
  // const channels = db.prepare("SELECT * FROM youtube").all();

  return (
    <div>
      <MyPage />
      <SearchBar />
    </div>
  );
}
