import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { aboutRoutes } from '../../pages/about/aboutRoutes'
import { bookRoutes } from '../../pages/books/booksRoutes'
import { homeRoutes } from '../../pages/home/homeRoutes'

const routeItems = [...homeRoutes, ...bookRoutes, ...aboutRoutes].map(
  (route, i) => <Route key={i} exact {...route} />
)

const Pages = (): JSX.Element => <Switch>{routeItems}</Switch>

export default Pages
