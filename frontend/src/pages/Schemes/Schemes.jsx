import "./Schemes.css";

import { schemes } from "../../data/schemes";
import Navbar from "../../components/Navbar/Navbar";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterChips from "../../components/FilterChips/FilterChips";
import SchemeCard from "../../components/SchemeCard/SchemeCard";
import Pagination from "../../components/Pagination/Pagination";

import schemeBanner from "../../assets/images/scheme-banner.png";

function Schemes() {
  return (
    <>
      <Navbar />

      <section className="schemes-page">

        {/* Hero */}

        <div className="schemes-hero">

          <div className="hero-left">

            <h1>Explore Government Schemes</h1>

            <p>
              Discover and explore government schemes that match
              your profile and needs.
            </p>

          </div>

          <div className="hero-right">

            <img
              src={schemeBanner}
              alt="Government Schemes"
            />

          </div>

        </div>

        <SearchBar />

        <FilterChips />

        <div className="schemes-grid">

          {schemes.map((scheme) => (
    <SchemeCard
      key={scheme.id}
      scheme={scheme}
    />
  ))}

        </div>

        <Pagination />

      </section>

    </>
  );
}

export default Schemes;