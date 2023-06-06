from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("home.html")

@views.route('/dashboard')
def dashboard():
    return render_template("dashboard.html")

@views.route('/profile')
def profile():
    return render_template("profile.html")

@views.route('/project_mgt')
def project_mgt():
    return render_template("project_mgt.html")

@views.route('/task_detail')
def task_detail():
    return render_template("task_detail.html")

