export const renderModalSign = (modalOverlay) => {
	modalOverlay.innerHTML = `
		<div class="signModal">
			<div class="modal-header">
				<span class="menu__sign">
					<span class="menu__sign-in menu__sign" data-mode="modal-signin">Login</span>
					<span class="menu__sign-up menu__sign" data-mode="modal-signup">Registration</span>
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
				<form class="modal-form" action="#" method="POST">
					<input type="email" class="icon__modal icon-email" name="email" id="" placeholder="Email" required>
					<input type="password" class="icon__modal icon-password" name="password" id="" placeholder="Password"
						required>
					<input type="password" class="icon__modal icon-password2 modal-signup" name="password-repeat" id=""
						placeholder="Repeat password" required>
					<div class="modal-signin modal-checkbox">
						<span>
							<input type="checkbox" name="remember" id="cbRemember">
							<label for="cbRemember">Remember me</label>
						</span>
						<a href="#" class="modal-sign-forgot">Forgot password?</a>
					</div>
					<div class="modal-signup modal-checkbox">
						<span>
							<input type="checkbox" name="policy-agree" id="cbAgree">
							<label for="cbAgree">I agree with the <a href="#" target="_blank">Terms and
									conditions</a> and <a href="#" target="_blank">Privacy policy</a>
							</label>
						</span>
					</div>
					<button type="submit" class="modal-signin btn__sign btn__sign-in">SIGN IN</button>
					<button type="submit" class="modal-signup btn__sign btn__sign-up">SIGN UP</button>
				</form>
			</div>
			<div class="modal-footer">
				<p class="login-social">Or sign in via</p>
				<div class="social-buttons">
					<svg width="36" height="36" class="icon">
						<use xlink:href="assets/workber_img/icons.svg#btn-facebook"></use>
					</svg>
					<svg width="36" height="36" class="icon">
						<use xlink:href="assets/workber_img/icons.svg#btn-twitter"></use>
					</svg>
					<svg width="36" height="36" class="icon">
						<use xlink:href="assets/workber_img/icons.svg#btn-google"></use>
					</svg>
				</div>
			</div>
		</div>
	`;
	modalOverlay.querySelector('.menu__close').addEventListener('click', () => {
		modalOverlay.style.display = 'none';
		modalOverlay.querySelector('.menu__close').removeListener('click');
	});
};