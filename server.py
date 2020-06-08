import os
from flask import Flask, flash, request, redirect, url_for,render_template
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin
UPLOAD_FOLDER = './files'
ALLOWED_EXTENSIONS = {'csv','xlsx'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)

#https://www.youtube.com/watch?v=6bL7n9aP6e0 : reference



@app.route('/login')
def hello_world():
    return 'login page'

@app.route('/uploaded_file')
def upload_doc():
    return 'file uploaded'

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/api/enroll', methods=['GET', 'POST'])
@cross_origin()
def upload():
    print("gobar")
    print(request.data.decode())
    # if request.method == 'POST':
    #     if 'file' not in request.files:
    #         flash('No file part')
    #         return redirect(request.url)
    #     file = request.files['file']
    #     if file.filename == '':
    #         flash('No selected file')
    #         return redirect(request.url)
    #     if file and allowed_file(file.filename):
    #         filename = secure_filename(file.filename)
    #         file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    #         return 'file uploaded'
    # else:
    #     return render_template('upload.html')
    return "gobar"


if __name__ == "__main__":
    app.run(debug=True)

    
