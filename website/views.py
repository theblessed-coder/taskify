from flask import Blueprint, render_template
from flask_login import login_required, current_user

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html")

@views.route('/dashboard')
@login_required
def dashboard():
    return render_template("dashboard.html")

@views.route('/profile')
@login_required
def profile():
    return render_template("profile.html")

@views.route('/project_mgt')
@login_required
def project_mgt():
    return render_template("project_mgt.html")

@views.route('/task_detail')
@login_required
def task_detail():
    return render_template("task_detail.html")

