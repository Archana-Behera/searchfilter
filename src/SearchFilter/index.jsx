import React from "react";
import Data from "./Data";
// import ReactStars from "react-stars";
// import Select from 'react-select';

const Search = () => {
    const data = [
        { title: "The Matrix", ratings: "7.5", category: "Action" },
        { title: "Focus", ratings: "6.9", category: "Comedy" },
        { title: "The Lazarus Effect", ratings: "6.4", category: "Thriller" },
        { title: "Everly", ratings: "5.0", category: "Action" },
        { title: "Maps to the Stars", ratings: "7.5", category: "Drama" }
    ];

    //     const category =[
    //   { value: 'Action' },
    //   { value: 'Drama'},
    //   { value: 'Comedy' },
    //   { value: 'Thriller' },

    //     ]

    // const projectOptions = category.map((projects) =>{
    //     return { value: projects.value, label: projects.value};
    //   })

    const [searchInput, setSearchInput] = React.useState("");
    const [filter, setFilter] = React.useState("");
    const [movieType, setMovieType] = React.useState('');

    // let blank=[]

    //  movieType.map((ele)=> blank.push(ele.value.toLowerCase()))
    //  console.log('jsd',blank)

    // const res= data.filter(ele => blank.includes(ele.category.toLowerCase()))
    //  console.log("res",res);

    let post = data.filter((value) => {
        if ((searchInput === "" && filter === "" && movieType === "" ) || filter === "all" ||movieType === "all"
        ) {
            return value;
        } else if (filter === "" && movieType === "" && value.title.toLowerCase().includes(searchInput.toLowerCase())) {
            return value;
        } else if (searchInput === "" && movieType === "" && value.ratings.toString().includes(filter)) {
            return value;
        } else if (searchInput === "" && filter === "" && value.category.toLowerCase().includes(movieType.toLowerCase())
        ) {
            return value;

        } else if (searchInput === "" && value.ratings.toString().includes(filter)&& value.category.toLowerCase().includes(movieType.toLowerCase())
        ) {
            return value;
        } else if (
            value.title.toLowerCase().includes(searchInput.toLowerCase()) && filter === "" && value.category.toLowerCase().includes(movieType.toLowerCase())
        ) {
            return value;
        } else if (value.title.toLowerCase().includes(searchInput.toLowerCase()) && value.ratings.toString().includes(filter) && movieType === ""
        ) {
            return value;
        } else if (searchInput !== "" && filter !== "" && movieType !== ""
        ) {
            if (
                value.title.toLowerCase().includes(searchInput.toLowerCase()) && value.ratings.toString().toLowerCase().includes(filter.toLowerCase())
                &&
                value.category.toLowerCase().includes(movieType.toLowerCase())
            )
                return value;
        }
    });
  

    return (
        <>
            <div style={{ width: "100%", marginTop: '60px' }}>
                <div className="flex">
                    <input
                        style={{ width: "20%" }}
                        label="Search Blog"
                        onChange={(e) => setSearchInput(e.target.value)}
                        value={searchInput}
                        placeholder="search by Movie Name"
                    />
                    <div>
                        <select
                            value={filter}
                            onChange={(event) => {
                                setFilter(event.target.value);
                            }}
                            className="dropdown"
                        >
                            <option value="">All</option>
                            <option value="1">rating 1</option>
                            <option value="2">  rating 2</option>
                            <option value="3"> rating 3</option>
                            <option value="4"> rating 4</option>
                            <option value="5"> rating 5</option>
                            <option value="6"> rating 6</option>
                            <option value="7"> rating 7</option>
                            <option value="8"> rating 8</option>
                            <option value="9"> rating 9</option>
                            <option value="10"> rating 10</option>
                        </select>
                        <select
                            value={movieType}
                            onChange={(event) => {
                                setMovieType(event.target.value);
                            }}
                            className="dropdown"

                        >
                            <option value="">All</option>
                            <option value="action">Action</option>
                            <option value="drama">Drama</option>
                            <option value="comedy">Comedy</option>
                            <option value="thriller">Thriller</option>
                        </select>
                        {/* <Select
                         className="dropdown"
                       closeMenuOnSelect={false}
                      value={movieType}
                      onChange={setMovieType}
                    isMulti
                  options={projectOptions}
                    /> */}
                    </div>
                </div>
            </div>
            <Data movie={post} />
        </>
    );
};

export default Search;
