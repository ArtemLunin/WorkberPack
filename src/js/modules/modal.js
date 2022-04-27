import { firebaseGoogleAuth } from "./firebase";
import {getLocation, getAppItem} from './storage';
import {setPositionOnMap} from './map';
import {hideSignInfo, submitSignForm, submitVerifyForm, submitResendForm, submitRestoreForm, submitPasswordForm} from './forms';
import {registrationID, storeLinks, termsHTML, privacyHTML} from './config';

export const commonModalOpenClass = 'modal-open-class';


export const showModalMap = (sourceForm) => {
	const locationOverlay = document.querySelector('.location-overlay');
	const locationBtnClose = document.querySelector('.location__btn-close');
	setPositionOnMap(sourceForm.form.querySelector(sourceForm.lat).value, sourceForm.form.querySelector(sourceForm.lng).value);
	locationOverlay.classList.add('location-overlay-open', commonModalOpenClass);
	disableScroll();
	
	const closeModalMap = (e) => {
		const target = e.target;
		if (target.matches('.location__btn-close') || target.matches('.location-overlay')) {
			let [latOld, lngOld] = getLocation();
			const lat = getAppItem('lat'),
				lng = getAppItem('lng');
			if (Math.abs(lat - parseFloat(latOld)) > 0.00001 || 
				Math.abs(lng - parseFloat(lngOld)) > 0.00001) {
				sourceForm.form.querySelector(sourceForm.lat).value = lat;
				sourceForm.form.querySelector(sourceForm.lng).value = lng;
				sourceForm.form.querySelector(sourceForm.homeLocation).textContent = getAppItem('address');
			}
			locationOverlay.removeEventListener('click', closeModalMap);
			locationOverlay.classList.remove('location-overlay-open', commonModalOpenClass);
			enableScroll();
		}
		
	};
	
	locationOverlay.addEventListener('click', closeModalMap);
};

// export const modalMap = (settingsSelector, btnCloseSelector, overlaySelector, overlayOpenClass) => {

// 	// const iconSettings = document.querySelector(settingsSelector);
// 	const locationBtnClose = document.querySelector(btnCloseSelector);
// 	const locationOverlay = document.querySelector(overlaySelector);

// 	const settingsModalOpen = (e) => {
// 		e.preventDefault();
// 		const [lat, lng] = getLocation();

// 		locationBtnClose.dataset['lat'] = lat;
// 		locationBtnClose.dataset['lng'] = lng;

// 		setPositionOnMap(lat, lng);
// 		locationOverlay.classList.add(overlayOpenClass, commonModalOpenClass);
// 		disableScroll();
// 	};

// 	const settingsModalClose = () => {
// 		locationOverlay.classList.remove(overlayOpenClass);
// 		enableScroll();
// 		console.log(getAppItem('lat'), parseFloat(locationBtnClose.dataset['lat']));
// 		console.log(getAppItem('lng'), parseFloat(locationBtnClose.dataset['lng']));
// 		if(getAppItem('lat') !== parseFloat(locationBtnClose.dataset['lat']) || getAppItem('lng') !== parseFloat(locationBtnClose.dataset['lng'])) {
// 			// reloadCurrentPage();
// 			console.log('position changed');
// 		}
// 	};

// 	locationOverlay.addEventListener('click', event => {
// 		const target = event.target;
// 		if(target.matches(btnCloseSelector) || target.matches(overlaySelector)) {
// 			settingsModalClose();
// 		}
// 	});

// };

export const renderModalSign = (modalOverlayClass, settingsSelector) => {
	const iconProfile = document.querySelector(settingsSelector);
	const modalSign = document.createElement('div');

	modalSign.classList.add(modalOverlayClass, commonModalOpenClass);
	modalSign.innerHTML = `
		<div class="signModal">
			<div class="modal-header">
				<span class="menu__sign_">
					<span class="menu__sign-in menu__sign" data-items_show="modal-signin" data-items_hide="modal-signup">Login</span>
					<span class="menu__sign-up menu__sign" data-items_show="modal-signup" data-items_hide="modal-signin">Registration</span>
				</span>
				<span class="menu__close">
					<svg width="24" height="24" class="icon">
						<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
					</svg>
				</span>
			</div>
			<div class="modal-body">
				<h2 class="modal-signin modal-title">Welcome back!</h2>
				<h2 class="modal-signup modal-title">New user?</h2>
				<form class="modal-form" action="#" method="POST" id="loginForm">
					<input type="email" class="icon__modal icon-email" name="email" id="email" placeholder="Email" required>
					<input type="password" class="icon__modal icon-password" name="pwd" id="" placeholder="Password"
						required>
					<input type="password" class="icon__modal icon-password2 modal-signup" name="password-repeat" id=""
						placeholder="Repeat password" required>
					<div class="modal-signin modal-checkbox">
						<!--<span>
							<input type="checkbox" name="remember" id="cbRemember" class="modal-signin">
							<label for="cbRemember">Remember me</label>
						</span>-->
						<a href="#" class="modal-sign-forgot">Forgot password?</a>
					</div>
					<div class="modal-signup modal-checkbox">
						<span>
							<input type="checkbox" name="policy-agree" id="cbAgree" class="modal-signup" data-control="btn__sign-up">
							<label for="cbAgree">I agree with the <a href="${termsHTML}" target="_blank">Terms and conditions</a> and <a href="${privacyHTML}" target="_blank">Privacy policy</a>
							</label>
						</span>
					</div>
					<button type="submit" class="modal-signin btn__sign btn__sign-in" id="btn__sign-in">SIGN IN</button>
					<button type="submit" class="modal-signup btn__sign btn__sign-up" id="btn__sign-up">SIGN UP</button>
					<p class="errorSignMessage"></p>
					<input type="hidden" name="registrationID" id="registrationID" value=${registrationID}>
					<input type="hidden" name="uid" id="uid" value="">
				</form>
			</div>
			<div class="modal-footer">
				<p class="login-social">Or sign in via</p>
				<div class="social-buttons">
					<!--<svg width="36" height="36" class="icon">
						<use xlink:href="assets/workber_img/icons.svg#btn-facebook"></use>
					</svg>
					<svg width="36" height="36" class="icon">
						<use xlink:href="assets/workber_img/icons.svg#btn-twitter"></use>
					</svg>-->
					<a href="#" class="btn-auth" data-auth_provider="google">
						<svg width="36" height="36" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-google"></use>
						</svg>
					</a>
				</div>
			</div>
		</div>
	`;

	const renderModalVerification = (modalOverlayClass) => {
		const modalVerification = document.createElement('div');

		modalVerification.classList.add(modalOverlayClass, commonModalOpenClass);
		modalVerification.innerHTML = `
			<div class="signModal">
				<div class="modal-header">
					<div class="back-menu">
						<a href="#" class="navigation-link back-feed">
							<svg width="25" height="24" class="icon">
								<use xlink:href="assets/workber_img/icons.svg#btn-back"></use>
							</svg>
							<span class="text-back">
								BACK
							</span>
						</a>
					</div>
					<span class="menu__close">
						<svg width="24" height="24" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
						</svg>
					</span>
				</div>
				<div class="modal-body">
					<h2 class="modal-signin modal-title">Thank you!</h2>
					<p class="success-reg">An email was sent to your address containing verification code.<br>
					Please, enter your verification code</p>
					<form id="verificationForm">
						<label for="code" style="font-size: 12px;color: #9AA0A8;">Verification code</label>
						<input type="text" class="input-form" maxlength="10" name="code" id="code" autocomplete="off">
						<p class="errorSignMessage"></p>
						<div style="margin-top:32px;color: #9AA0A8;">
							<span>Haven't received code?</span>
							<a href="#" class="a-resend">Resend</a>
						</div>
						<p class="infoSignMessage"></p>
						<button type="submit" class="modal-signin btn__sign btn__confirmation">Continue</button>
						<input type="hidden" name="registrationID" id="registrationID" value=${registrationID}>
						<input type="hidden" name="email" id="email">
						<input type="hidden" name="typeVerify" id="typeVerify" value="0" disabled>
					</form>
				</div>
			</div>
		`;

		const verificationForm = modalVerification.querySelector('#verificationForm'),
			resendCode = verificationForm.querySelector('.a-resend');

		verificationForm.addEventListener('submit', (e) => {
			e.preventDefault();
			if (verificationForm.querySelector('#typeVerify').value === '1') {
				submitVerifyForm(e.target, modalOverlayClass, '.errorSignMessage', '.infoSignMessage', modalChangePassword);
			} else {
				submitVerifyForm(e.target, modalOverlayClass, '.errorSignMessage', '.infoSignMessage', modalCongratulation);
			}
		});

		verificationForm.addEventListener('reset', () => {
			// hideSignInfo(loginForm.querySelector('.errorSignMessage'));
		});

		resendCode.addEventListener('click', (e) => {
			e.preventDefault();
			submitResendForm(e.target.closest('form'), '.errorSignMessage', '.infoSignMessage');
		});

		modalVerification.addEventListener('click', (e) => {
			const target = e.target;
			if (!target.closest('.signModal') || target.closest('.menu__close')) {
				closeSignModal(modalVerification);
			}
		});

		return modalVerification;
	};

	const renderModalCongratulation = (modalOverlayClass) => {
		const modalCongratulation = document.createElement('div');

		modalCongratulation.classList.add(modalOverlayClass, commonModalOpenClass);
		modalCongratulation.innerHTML = `
			<div class="signModal">
				<div class="modal-header justify-end">
					<span class="menu__close">
						<svg width="24" height="24" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
						</svg>
					</span>
				</div>
				<div class="modal-body">
					<h2 class="modal-signin modal-title">Congratulations! You have
					successfully registered!</h2>
					<p class="descr-mobile-store">Download the Workber app to your device to find all services<br> and projects around you</p>
					<div class="store-links">
						<a href="${storeLinks.appStore}" target="_blank" class="mobile-store-link"><img src="assets/workber_img/appstore.png" alt="App Store"></a>
						<a href=${storeLinks.goolePlay} target="_blank" class="mobile-store-link"><img src="assets/workber_img/googleplay.png" alt="Goolge Play"></a>
					</div>
				</div>
			</div>
		`;

		modalCongratulation.addEventListener('click', (e) => {
			const target = e.target;
			if (!target.closest('.signModal') || target.closest('.menu__close')) {
				closeSignModal(modalCongratulation);
			}
		});

		return modalCongratulation;
	};

	const renderModalRestore = (modalOverlayClass) => {
		const modalRestore = document.createElement('div');

		modalRestore.classList.add(modalOverlayClass, commonModalOpenClass);
		modalRestore.innerHTML = `
			<div class="signModal">
				<div class="modal-header">
					<div class="back-menu">
							<a href="#" class="navigation-link back-feed">
								<svg width="25" height="24" class="icon">
									<use xlink:href="assets/workber_img/icons.svg#btn-back"></use>
								</svg>
								<span class="text-back">
									BACK
								</span>
							</a>
					</div>
					<span class="menu__close">
						<svg width="24" height="24" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
						</svg>
					</span>
				</div>
				<div class="modal-body">
					<h2 class="modal-signin modal-title">Forgot password?</h2>
					<p style="margin-bottom: 32px;">We will send an email with password change instruction.</p>
					<form id="restoreForm">
						<input type="email" class="icon__modal icon-email" name="email" id="email" placeholder="Please enter your email address" style="margin-bottom: 32px;"
							required>
						<p class="errorSignMessage"></p>
						<input type="hidden" name="restoreID" id="restoreID" value=${registrationID}>
						<button type="submit" class="modal-signin btn__sign btn__restore">Send</button>
					</form>
				</div>
			</div>
		`;

		const restoreForm = modalRestore.querySelector('#restoreForm');

		modalRestore.addEventListener('click', (e) => {
			const target = e.target;
			if (!target.closest('.signModal') || target.closest('.menu__close')) {
				closeSignModal(modalRestore);
			}
		});

		modalRestore.querySelector('.back-feed').addEventListener('click', (e) => {
			e.preventDefault();
			closeSignModal(modalRestore);
			document.body.append(modalSign);
			disableScroll();
		});

		restoreForm.addEventListener('submit', (e) => {
			e.preventDefault();
			submitRestoreForm(e.target, '.errorSignMessage', modalRestore, modalVerification);
		});

		return modalRestore;
	};

	const renderModalChangePassword = (modalOverlayClass) => {
		const modalChangePassword = document.createElement('div');

		modalChangePassword.classList.add(modalOverlayClass, commonModalOpenClass);
		modalChangePassword.innerHTML = `
			<div class="signModal">
				<div class="modal-header justify-end">
					<span class="menu__close">
						<svg width="24" height="24" class="icon">
							<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
						</svg>
					</span>
				</div>
				<div class="modal-body">
					<h2 class="modal-title">Set password</h2>
					<p style="margin-bottom: 32px;">Please, choose your password.</p>
					<form id="changePasswordForm">
						<input type="password" class="icon__modal icon-password" name="pwd" id="" placeholder="Password" style="margin-bottom: 32px;" required>
						<input type="password" class="icon__modal icon-password2" name="password-repeat" id=""	placeholder="Repeat password" style="margin-bottom: 32px;" required>
						<p class="errorSignMessage"></p>
						<input type="hidden" name="email" id="email">
						<input type="hidden" name="confirmation_token" id="confirmation_token">
						<button type="submit" class="btn__sign btn__confirmation">Done</button>
					</form>
				</div>
			</div>
		`;

		const changePasswordForm = modalChangePassword.querySelector('#changePasswordForm');

		modalChangePassword.addEventListener('click', (e) => {
			const target = e.target;
			if (!target.closest('.signModal') || target.closest('.menu__close')) {
				closeSignModal(modalChangePassword);
			}
		});

		changePasswordForm.addEventListener('submit', (e) => {
			e.preventDefault();
			submitPasswordForm(e.target, '.errorSignMessage', modalChangePassword);
		});

		return modalChangePassword;
	};

	const authSocial = (e) => {
		e.preventDefault();
		const target = e.target;
		const parent = target.closest('.btn-auth');
		if (parent) {
			const authProvider = parent.dataset.auth_provider;
			if (authProvider === "google") {
				firebaseGoogleAuth().then((uid) => {
					if (uid) {
						loginForm.uid.value = uid;
						loginForm.querySelector('#btn__sign-in').focus();
						submitSignForm(loginForm, '.errorSignMessage', modalSign, null);
						// loginForm.requestSubmit(loginForm.querySelector('#btn__sign-in'));
						// loginForm.submit();
					}
					// console.log(data);
				});
			}
			// console.log(authProvider);
		}
	};

	const switchMenu = (e) => {
		const target = e.target;
		if (target.classList.contains('menu__sign')) {
			if (target.classList.contains('menu__sign-in')) {
				switchSignMethod(modalSign, '.menu__sign-in');
			} else {
				switchSignMethod(modalSign, '.menu__sign-up');
			}
			hideSignInfo(loginForm.querySelector('.errorSignMessage'));
		}
	};

	const switchSignMethod = (container, showSelector) => {
		const menuItemShow = container.querySelector(showSelector);
		container.querySelectorAll('.menu__sign').forEach(item => {
			item.classList.remove('active');	
		});
		menuItemShow.classList.add('active');

		container.querySelectorAll(`.${menuItemShow.dataset['items_show']}`).forEach(item => {
			item.style.display = '';
			item.removeAttribute('disabled', '');
		});
		
		container.querySelectorAll(`.${menuItemShow.dataset['items_hide']}`).forEach(item => {
			item.style.display = 'none';
			item.setAttribute('disabled', '');
		});

		toggleStatusElem(loginForm.querySelector(`#${loginForm.elements['policy-agree'].dataset['control']}`), loginForm.elements['policy-agree'].checked);
	};

	const loginForm = modalSign.querySelector('#loginForm'), 
		forgotPassword = loginForm.querySelector('.modal-sign-forgot');
	const modalVerification = renderModalVerification(modalOverlayClass),
		modalCongratulation = renderModalCongratulation(modalOverlayClass),
		modalRestore = renderModalRestore(modalOverlayClass),
		modalChangePassword = renderModalChangePassword(modalOverlayClass);

	modalSign.addEventListener('click', (e) => {
		const target = e.target;
		if (!target.closest('.signModal') || target.closest('.menu__close')) {
			closeSignModal(modalSign);
			if (modalSign.querySelector('.menu__close').dataset.reloadPage === '1') {
				location.reload();
			}
		}
	});

	modalSign.querySelector('.modal-header').addEventListener('click', switchMenu);
	modalSign.querySelector('.social-buttons').addEventListener('click', authSocial);
	

	iconProfile.addEventListener('click', () => {
		switchSignMethod(modalSign, '.menu__sign-in');
		modalSign.querySelector('.menu__close').dataset.reloadPage = '';
		document.body.append(modalSign);
		loginForm.reset();
		disableScroll();
	});

	loginForm.elements['policy-agree'].addEventListener('click', (e) => {
		const target = e.target;
		toggleStatusElem(loginForm.querySelector(`#${target.dataset['control']}`), target.checked);
	});

	loginForm.addEventListener('submit', (e) => {
		e.preventDefault();
		submitSignForm(e.target, '.errorSignMessage', modalSign, modalVerification);
	});

	loginForm.addEventListener('reset', () => {
		hideSignInfo(loginForm.querySelector('.errorSignMessage'));
	});

	forgotPassword.addEventListener('click', (e) => {
		e.preventDefault();
		const email = forgotPassword.closest('form').querySelector('#email');
		if (email) {
			modalRestore.querySelector('#email').value = email.value;
		}
		document.body.append(modalRestore);
		closeSignModal(modalSign);
		disableScroll();
	});

	const toggleStatusElem = (elem, cbState) => {
		try {
			if (cbState === true) {
				elem.removeAttribute('disabled');
			} else {
				elem.setAttribute('disabled', '');
			}
		} catch (e) {

		}
	};
};

export const closeSignModal = (container) => {
	container.remove();
	enableScroll();
};

// export const renderModalDeleteAccount = () => {
// 	const modal = document.createElement('div');

// 	modal.classList.add(modalOverlayClass);
// 	modal.innerHTML = `
// 		<div class="signModal">
// 			<div class="modal-header justify-end">
// 				<span class="menu__close">
// 					<svg width="24" height="24" class="icon">
// 						<use xlink:href="assets/workber_img/icons.svg#btn-close"></use>
// 					</svg>
// 				</span>
// 			</div>
// 			<div class="modal-body">
// 				<h2 class="modal-title">Delete account</h2>
// 				<p style="margin-bottom: 32px;">Please, choose your password.</p>
// 				<form id="deleteAccountForm">
// 					<button type="submit" class="btn__sign btn__confirmation">Done</button>
// 				</form>
// 			</div>
// 		</div>
// 	`;

// 	const changePasswordForm = modalChangePassword.querySelector('#changePasswordForm');

// 	modalChangePassword.addEventListener('click', (e) => {
// 		const target = e.target;
// 		if (!target.closest('.signModal') || target.closest('.menu__close')) {
// 			closeSignModal(modalChangePassword);
// 		}
// 	});
// };

const disableScroll = () => {
	const widthScroll = window.innerWidth - document.body.offsetWidth;
	document.body.dbScrollY = window.scrollY;
	document.body.style.cssText = `
		position: fixed;
		top: ${-window.scrollY}px;
		left: 0;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		padding-right: ${widthScroll}px;
	`;
};

const enableScroll = () => {
	document.body.style.cssText = '';
	window.scroll({
		top: document.body.dbScrollY,
	});
};


