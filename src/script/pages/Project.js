import React from 'react'

import allProjects from 'Utilities/projects'
import PageNotFound from 'Pages/PageNotFound'
import Detail from 'Components/Detail'

export default class Project extends React.Component {

    state = {
        slug: this.props.match.params.slug,
        client: {},
        component: '',
        name: '',
        description: '',
        duration: '',
        location: '',
        scope: '',
        stack: '',
        website: '',
        appstore: '',
        playstore: '',
        isLoading: 'fadeInUp',
      }
    
    componentWillMount() {
        this.updateClient(this.props.match.params.slug)
    }


    updateClient = (slug) => {
        
      const client = allProjects.find(this.newFunction(slug))

        
      if (!client) {
        return this.setState({ client }) 
      }

      this.setState({
        component: client.loadComponent,
        name: client.name,
        order: client.order,
        logo: client.logo,
        description: client.description,
        duration: client.duration,
        location: client.location,
        scope: client.scope,
        stack: client.stack,
        website: client.website,
        appstore: client.appstore,
        playstore: client.playstore,
        isLoading: 'fadeInUp',
      })

      console.log(this.state.component)
    
      document.title = `${client.name} | Farrah Ryan`

    }
    
    renderClient = () => {
    
      return (
        <div>{this.state.component()}</div>
      )
    }
    
    render() {
      return this.state.client ? this.renderClient() : <PageNotFound />
    }

    newFunction(slug) {
       return s => s.slug === slug
    }
}
