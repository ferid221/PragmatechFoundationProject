from app import *

auth=Blueprint(
    'auth',
     __name__,
     url_prefix='/auth',
     template_folder='templates',
     static_folder='static')

@auth.route('/',methods=['POST','GET'])
def login():
    login=LoginForm()
    if login.validate_on_submit():
        if login.username.data=='adminportfolio' and login.password.data=='adminportfolio':
            return redirect('/admin')
        else:
            flash(f'Wrong Username or Password','success')
            return redirect('/auth')
    return render_template('auth/login.html',login=login)

