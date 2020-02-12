import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const CornerFaveLabel = () => (
//   <Grid columns={2}>
//     <Grid.Column>
      <Image
        fluid
        label={{ as: 'a', corner: 'right', icon: 'star' }}
        src='/images/wireframe/image.png'
      />
//     </Grid.Column>
//   </Grid>
)

export default CornerFaveLabel