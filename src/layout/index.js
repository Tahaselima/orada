import React from 'react';
import PropTypes from 'prop-types';
import { ToastProvider } from 'react-toast-notifications';

import Notification from './Notification';
import { Styled } from './styles';
import Header from './Header';
import Content from './Content';

class BasicLayout extends React.Component {

	render() {
		const p = this.props;
		const theme = {
			black: '#232323',
			dark: '#191919',
			orange: '#FF6000',
			white: '#FFF',
			fontSizeXs: '1rem',
			fontSizeSm: '1.2rem',
			fontSize: '1.4rem',
			fontSizeLg: '1.6rem',
			fontSizeXl: '2.2rem',
			fontSizeXxl: '2.4em',
		};
		return (
			<Styled theme={theme}>
				<ToastProvider 
					components={{ Toast: Notification }}
					autoDismiss
					placement='top-center'
					autoDismissTimeout={4000}
					>
					<div className="public-layout">
							<Header/>
							<Content >
								{p.children}
							</Content>
					</div>
				</ToastProvider>
			</Styled>
		);
	}
}
  
BasicLayout.propTypes = { children: PropTypes.element.isRequired };
  
export default BasicLayout;