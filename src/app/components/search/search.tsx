import React from 'react'
import Select from 'react-select'
import './style.scss'

interface SearchProps {

}

interface SearchState {

}

class Search extends React.Component<SearchProps, SearchState> {
  render() {
    return (
      <div className='search'>
        <Select

          optiions={[]}
        />
      </div>
    )
  }
}

export default Search