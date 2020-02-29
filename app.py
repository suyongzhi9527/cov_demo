from flask import Flask, request
from flask import render_template
from flask import jsonify
from jieba.analyse import extract_tags
import utils
import string
import decimal
import flask.json


class MyJSONEncoder(flask.json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, decimal.Decimal):
            # Convert decimal instances to strings.
            return str(obj)
        return super(MyJSONEncoder, self).default(obj)


app = Flask(__name__)
app.json_encoder = MyJSONEncoder


@app.route('/')
def main():
    return render_template("main.html")


@app.route('/center')
def get_cl_data():
    data = utils.get_cl_data()
    return jsonify({"confirms": data[0], "suspect": data[1], "heal": data[2], "dead": data[3]})


@app.route('/center2')
def get_c2_data():
    res = []
    for tup in utils.get_c2_data():
        # print(tup)
        res.append({"name": tup[0], "value": int(tup[1])})
    return jsonify({"data": res})


@app.route('/left1')
def get_l1_data():
    data = utils.get_l1_data()
    day, confirm, suspect, heal, dead = [], [], [], [], []
    for a, b, c, d, e in data[7:]:
        day.append(a.strftime('%m-%d'))
        confirm.append(b)
        suspect.append(c)
        heal.append(d)
        dead.append(e)
    return jsonify({'day': day, 'confirms': confirm, 'suspect': suspect, 'heal': heal, 'dead': dead})


@app.route('/left2')
def get_l2_data():
    data = utils.get_l2_data()
    day, confirm_add, suspect_add = [], [], []
    for a, b, c in data[7:]:
        day.append(a.strftime('%m-%d'))
        confirm_add.append(b)
        suspect_add.append(c)
    return jsonify({'day': day, 'confirm_add': confirm_add, 'suspect_add': suspect_add})


@app.route('/right1')
def get_r1_data():
    data = utils.get_r1_data()
    city = []
    confirm = []
    for k, v in data:
        city.append(k)
        confirm.append(int(v))
    return jsonify({"city": city, "confirms": confirm})


@app.route('/right2')
def get_r2_data():
    data = utils.get_r2_data()
    # print(data)
    d = []
    for i in data:
        k = i[0].rstrip(string.digits)
        v = i[0][len(k):]
        ks = extract_tags(k)
        for j in ks:
            if not j.isdigit():
                d.append({'name': j, 'value': v})
    return jsonify({'kws': d})


@app.route('/time')
def get_time():
    return utils.get_time()


if __name__ == '__main__':
    app.run()
