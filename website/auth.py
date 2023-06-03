from flask import Blueprint, render_template, request, flash

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    data = request.form
    print(data)
    return render_template("login.html")


@auth.route('/logout')
def logout():
    return "<p>logout</p>"

@auth.route('/sign-up', methods=['GET', 'POST'])
def sign_up():
    if request.method == 'POST':
        email = request.form.get('email')
        fullname = request.form.get('fullname')
        password = request.form.get('password')
        password2 = request.form.get('password2')

        if len(email) < 4:
            flash("Email must be greater than 4 characters", category='error')
        elif len(fullname) < 2:
            flash("Name must be greater than 1 characters.", category='error')
        elif password != password2:
            flash("passwords don't match", category='error')
        elif len(password) < 7:
            flash("Password must be at least 7 characters", category='error')
        else:
            flash("Account created", category='success')
            
    return render_template("sign_up.html")