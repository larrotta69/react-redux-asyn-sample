// import React from 'react'
// import PropTypes from 'prop-types'

// import Page from '../Page/Page'
// import TodoForm from './../../containers/Todo/TodoForm'
// import TodoList from './../../containers/Todo/TodoList'
// import Filters from './../../components/Filters/Filters'

// import filterOptions from '../../api/filters'

// const Home = (props) => {
//     const {match} = props
//     return (
//         <Page match={match}>
//             <TodoForm />
//             <Filters filtersContent={filterOptions} currentFilter={match.params.filter}/>
//             <TodoList currentFilter={match.params.filter} />
//         </Page>
//     )
// }
/*
    Home propTypes
// */
// Home.propTypes = {
//     match: PropTypes.object
// }

// export default Home

import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {compose, branch} from 'recompose'

import Page from '../Page/Page'
import TodoForm from './../../containers/Todo/TodoForm'
import TodoList from './../../containers/Todo/TodoList'
import Filters from './../../components/Filters/Filters'

import filterOptions from '../../api/filters'

const Loader = () => <div>Loading</div>

const WithLoading = Component => props => {
    console.log(props.isLoaderOn)
    // return <div> {props.isLoaderOn ? <Loader /> : null}
    //     <Component {...props} />
    // </div>
    return props.isLoaderOn ? <Loader /> : <Component {...props} />
    // return branch((props) => props.isLoaderOn, <Loader />)
    // return <Component {...props} />
}

const Home = (props) => {
    const {match} = props
    return (
        <main match={match}>
            <TodoForm />
            <Filters filtersContent={filterOptions} currentFilter={match.params.filter}/>
            <TodoList currentFilter={match.params.filter} />
        </main>
    )
}

/*
    Home propTypes
*/
Home.propTypes = {
    match: PropTypes.object
}

export default compose(connect(
    ({reducerLoader}) => ({
        isLoaderOn: reducerLoader.isLoaderOn
    })),
    WithLoading
)(Home)
