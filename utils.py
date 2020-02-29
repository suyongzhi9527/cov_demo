import time
import pymysql


def get_conn():
    """
    :return 连接，游标
    """
    conn = pymysql.connect(
        host='localhost',
        user='root',
        password='123456',
        database='cov',
        port=3306
    )
    cursor = conn.cursor()
    return conn, cursor


def close_conn(conn, cursor):
    if cursor:
        cursor.close()
    if conn:
        conn.close()


def query(sql, *args):
    conn, cursor = get_conn()
    cursor.execute(sql, args)
    res = cursor.fetchall()
    close_conn(conn, cursor)
    return res


def get_time():
    str_time = time.strftime("%Y{}%m{}%d{} %X")
    return str_time.format("年", "月", "日")


def get_cl_data():
    sql = "select sum(confirm)," \
          "(select suspect from history order by ds desc limit 1)," \
          "sum(heal)," \
          "sum(dead)" \
          "from details where update_time=(select update_time from details order by update_time desc limit 1)"
    res = query(sql)
    return res[0]


def get_c2_data():
    sql = "select province,sum(confirm) from details where update_time = (select update_time from details order by update_time desc limit 1) " \
          "group by province"
    res = query(sql)
    return res


def get_l1_data():
    sql = "select ds, confirm, suspect, heal, dead from history"
    res = query(sql)
    return res


def get_l2_data():
    sql = "select ds, confirm_add, suspect_add from history"
    res = query(sql)
    return res


def get_r1_data():
    """
    返回非湖北地区城市确诊人数前5名
    """
    sql = "select city, confirm from (select city, confirm from details where update_time=(select update_time from details order by update_time desc limit 1) and province not in ('湖北','北京','上海','天津','重庆')" \
          "union all select province as city,sum(confirm) as confirm from details where update_time=(select update_time from details order by update_time desc limit 1)and province in ('北京','上海','天津','重庆') group by province) as a order by confirm desc limit 5"
    res = query(sql)
    return res


def get_r2_data():
    """
    返回最近20条热搜
    """
    sql = "select content from hotsearch order by id desc limit 20"
    res = query(sql)
    return res


if __name__ == '__main__':
    # data = get_cl_data()
    # data = get_c2_data()
    # data = get_l1_data()
    # data = get_l2_data()
    # data = get_r1_data()
    data = get_r2_data()
    print(data)
