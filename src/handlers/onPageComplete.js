import Debug from 'debug'

const debug = Debug('docktor:actions')

const handler = (page, context) => {
  debug('onPageComplete %s', page)
  context.setState({loading: false, message: '...'})
}

export default handler
