const handler = (key, value, context) => {
  context.state.currentProject[key] = value
  context.setState({currentProject: context.state.currentProject})
}

export default handler
