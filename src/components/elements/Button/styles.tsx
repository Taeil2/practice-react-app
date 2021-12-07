// @ts-ignore: no typing for package
import colors from 'material-colors'
import styled from 'styled-components'

const defaultDarkness = 400

export const StyledA = styled.a`
  display: inline-block;
  background: ${colors.teal[defaultDarkness]};
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  &.amber {
    background: ${colors.amber[defaultDarkness]};
  }
  &.blue {
    background: ${colors.blue[defaultDarkness]};
  }
  &.blueGrey {
    background: ${colors.blueGrey[defaultDarkness]};
  }
  &.brown {
    background: ${colors.brown[defaultDarkness]};
  }
  &.cyan {
    background: ${colors.cyan[defaultDarkness]};
  }
  &.deepOrange {
    background: ${colors.deepOrange[defaultDarkness]};
  }
  &.deepPurple {
    background: ${colors.deepPurple[defaultDarkness]};
  }
  &.green {
    background: ${colors.green[defaultDarkness]};
  }
  &.grey {
    background: ${colors.grey[defaultDarkness]};
  }
  &.indigo {
    background: ${colors.indigo[defaultDarkness]};
  }
  &.lightBlue {
    background: ${colors.lightBlue[defaultDarkness]};
  }
  &.lightGreen {
    background: ${colors.lightGreen[defaultDarkness]};
  }
  &.lime {
    background: ${colors.lime[defaultDarkness]};
  }
  &.orange {
    background: ${colors.orange[defaultDarkness]};
  }
  &.pink {
    background: ${colors.pink[defaultDarkness]};
  }
  &.purple {
    background: ${colors.purple[defaultDarkness]};
  }
  &.red {
    background: ${colors.red[defaultDarkness]};
  }
  &.teal {
    background: ${colors.teal[defaultDarkness]};
  }
  &.yellow {
    background: ${colors.yellow[defaultDarkness]};
  }
`
