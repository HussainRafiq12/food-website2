  document.getElementById('userType').addEventListener('change', (e) => {
            document.getElementById('restaurantField').style.display = e.target.value === 'admin' ? 'block' : 'none';
        });

        function signup() {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const userType = document.getElementById('userType').value;
            const restaurant = document.getElementById('restaurant').value;
            let users = JSON.parse(localStorage.getItem('users')) || [];

            if (users.some(u => u.email === email)) {
                alert('Email already registered!');
                return;
            }

            users.push({ email, password, type: userType, restaurant: userType === 'admin' ? restaurant : '' });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Signup successful! Please login.');
            window.location.href = 'login.html';
        }