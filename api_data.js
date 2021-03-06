define({ "api": [
  {
    "type": "POST",
    "url": "/public/course",
    "title": "报考专业查询",
    "group": "公共组",
    "description": "<p>查询报考专业考试科目</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "major_code",
            "description": "<p>报考专业代码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n    \"major_code\":\"030101k\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"查询失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major",
            "description": "<p>报考专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "public_course",
            "description": "<p>公共课科目</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_course",
            "description": "<p>专业课科目</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "\n[\n    {\n        \"statu\": 1,\n        \"msg\": \"查询成功\"\n    },\n    {\n        \"major\": \"法学\",\n        \"public_course\": \"大学英语\",\n        \"major_course\": \"宪法学\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "公共组",
    "name": "PostPublicCourse",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/public/course"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/student/register",
    "title": "考生注册",
    "group": "公共组",
    "description": "<p>注册账号报名</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n \"id_number\":\"test\",\n \"password\":\"test\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"注册失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n  \"statu\": 1,\n  \"msg\": \"注册成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "公共组",
    "name": "PostStudentRegister",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/student/register"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/teacher/register",
    "title": "教师注册",
    "group": "公共组",
    "description": "<p>注册账号进行管理</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n \"phone_number\":\"test\",\n \"password\":\"test\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"注册失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n  \"statu\": 1,\n  \"msg\": \"注册成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "公共组",
    "name": "PostTeacherRegister",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/teacher/register"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/teacher/achievement",
    "title": "修改考生成绩",
    "group": "教师组",
    "description": "<p>修改考生成绩</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "public_course_score",
            "description": "<p>公共课成绩</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "major_course_score",
            "description": "<p>专业课成绩</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIxODg3MTg2MTkxOCIsImlhdCI6MTYyNjk1MTc0NywiZXhwIjoxNjI2OTU1MzQ3fQ.oaQRS7Jfe1gQZeAumdDu4N5_D4hKySj3ducyiXOsm_Q\",\n    \"id_number\":\"admin\",\n    \"public_course_score\":\"100\",\n    \"major_course_score\":\"100\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"更改失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n    \"statu\": 1,\n    \"msg\": \"更改成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "教师组",
    "name": "PostTeacherAchievement",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/teacher/achievement"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/teacher/admission",
    "title": "修改考生录取状态",
    "group": "教师组",
    "description": "<p>修改考生录取状态</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "admission",
            "description": "<p>录取状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIxODg3MTg2MTkxOCIsImlhdCI6MTYyNjY5MDMzMiwiZXhwIjoxNjI2NjkzOTMyfQ.bZSvF7BWoonXij1wUzBs6je-3rq8kn_MejexaeCbFzg\",\n    \"id_number\":\"admin\",\n    \"admission\":\"预录取\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"更改失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n    \"statu\": 1,\n    \"msg\": \"更改成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "教师组",
    "name": "PostTeacherAdmission",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/teacher/admission"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/teacher/audit",
    "title": "修改考生信息审核状态",
    "group": "教师组",
    "description": "<p>修改考生信息审核状态</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "audit",
            "description": "<p>审核状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIxODg3MTg2MTkxOCIsImlhdCI6MTYyNjY5MDMzMiwiZXhwIjoxNjI2NjkzOTMyfQ.bZSvF7BWoonXij1wUzBs6je-3rq8kn_MejexaeCbFzg\",\n    \"id_number\":\"admin\",\n    \"audit\":\"审核通过\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"更改失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n    \"statu\": 1,\n    \"msg\": \"更改成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "教师组",
    "name": "PostTeacherAudit",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/teacher/audit"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/teacher/login",
    "title": "教师用户登录",
    "group": "教师组",
    "description": "<p>教师用户登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone_number",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n  \"phone_number\":\"1887186xxxx\",\n  \"password\":\"wsmm\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥，有效期为1h</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "\n{\n    \"statu\": 1,\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIxODg3MTg2MTkxOCIsImlhdCI6MTYyNjk1MDY4MywiZXhwIjoxNjI2OTU0MjgzfQ.mpA-kny643zZ_Tsy3QfLWGlUj0025FbpV7dwMA-Ziss\",\n    \"msg\": \"登录成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "教师组",
    "name": "PostTeacherLogin",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/teacher/login"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/teacher/student/information",
    "title": "查询考生详细信息（教师版）",
    "group": "教师组",
    "description": "<p>查询考生信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "\t{\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9udW1iZXIiOiJhZG1pbiIsImlhdCI6MTYyNjI1MDQ1NCwiZXhwIjoxNjI2MjU0MDU0fQ.7xeopz3mTQ0Jl9dxFt43HnhNlPhUi_wFdT8s7XEwLwc\",\n    \"id_number\":\"test\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"查询失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidate_name",
            "description": "<p>考生姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nation",
            "description": "<p>民族</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "home_address",
            "description": "<p>家庭住址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "political_outlook",
            "description": "<p>政治背景</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birth_data",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "face",
            "description": "<p>登记照的base64编码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "postcode",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact_address",
            "description": "<p>联系地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emergency_contact",
            "description": "<p>紧急联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emergency_contact_mode",
            "description": "<p>紧急联系方式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "graduate_school",
            "description": "<p>毕业院校</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "graduation_major",
            "description": "<p>毕业专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "graduation_school_code",
            "description": "<p>毕业院校代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diploma_code",
            "description": "<p>毕业证编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registration_institutions",
            "description": "<p>报考院校</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registered_institution_code",
            "description": "<p>报考院校代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major",
            "description": "<p>报考专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_code",
            "description": "<p>报考专业代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tcandidate_type",
            "description": "<p>考生类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "awards",
            "description": "<p>所获奖项</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "specialty",
            "description": "<p>特长</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>备注</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "audit",
            "description": "<p>审核状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "[\n    {\n        \"statu\": 1,\n        \"msg\": \"查询成功\"\n    },\n    {\n        \"candidate_name\": \"test\",\n        \"id_number\": \"test\",\n        \"nation\": \"汉\",\n        \"home_address\": \"xx小区xx号\",\n        \"gender\": \"男\",\n        \"political_outlook\": \"群众\",\n        \"birth_data\": \"2001年3月14日\",\n        \"face\": \"xxxc\"\n    },\n    {\n        \"contact_number\": \"1887186xxxx\",\n        \"postcode\": \"4xxxx\",\n        \"contact_address\": \"xx小区xx号\",\n        \"emergency_contact\": \"test\",\n        \"emergency_contact_mode\": \"1xxxx\"\n    },\n    {\n        \"graduate_school\": \"xx学院\",\n        \"graduation_school_code\": \"1xxxx\",\n        \"graduation_major\": \"计算机应用技术\",\n        \"diploma_code\": \"110\",\n        \"registration_institutions\": \"xx大学\",\n        \"registered_institution_code\": \"1xxxx\",\n        \"major\": \"计算机科学技术\",\n        \"major_code\": \"080901\",\n        \"tcandidate_type\": \"普通\"\n    },\n    {\n        \"awards\": \"xx奖学金，xx获奖\",\n        \"specialty\": \"xx特长\",\n        \"remarks\": \"\",\n        \"audit\":\"未通过\"       \n    }\n        \n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "教师组",
    "name": "PostTeacherStudentInformation",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/teacher/student/information"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/teacher/student/list",
    "title": "获取考生列表",
    "group": "教师组",
    "description": "<p>获取考生列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "page_num",
            "description": "<p>页数</p>"
          },
          {
            "group": "Parameter",
            "type": "Int",
            "optional": false,
            "field": "page_size",
            "description": "<p>每页返回数据条数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZV9udW1iZXIiOiIxODg3MTg2MTkxOCIsImlhdCI6MTYyNjk1MTc0NywiZXhwIjoxNjI2OTU1MzQ3fQ.oaQRS7Jfe1gQZeAumdDu4N5_D4hKySj3ducyiXOsm_Q\",\n    \"page_num\":0,\n    \"page_size\":1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n    \"statu\": 0,\n    \"msg\": \"查询失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "data",
            "description": "<p>返回的数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidate_name",
            "description": "<p>考生姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major",
            "description": "<p>报考专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "audit",
            "description": "<p>考生信息审核状态</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "public_course_score",
            "description": "<p>公共课分数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_course_score",
            "description": "<p>专业课分数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n    \"statu\": 1,\n    \"data\": [\n        {\n            \"id_number\": \"4202052001xxxxxxxx\",\n            \"candidate_name\": \"小王\",\n            \"major\": \"计算机科学技术\",\n            \"audit\": \"未通过\",\n            \"public_course_score\": \"暂无\",\n            \"major_course_score\": \"暂无\"\n        }\n    ],\n    \"msg\": \"查询成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "教师组",
    "name": "PostTeacherStudentList",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/teacher/student/list"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/student/login",
    "title": "考生登录",
    "group": "考生组",
    "description": "<p>登录以请求token</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n \"id_number\":\"test\",\n \"password\":\"test\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"登录失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥，有效期为1h</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n  \"statu\": 1,\n  \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9udW1iZXIiOiJhZG1pbiIsImlhdCI6MTYyNjI2MTc5MiwiZXhwIjoxNjI2MjY1MzkyfQ.ggHnicry6a-PMfgGEWCH4wg20io7TlEZAgdCFqsaeP0\",\n  \"msg\": \"登录成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "考生组",
    "name": "PostStudentLogin",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/student/login"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user/achievement",
    "title": "查询考试分数",
    "group": "考生组",
    "description": "<p>查询考试分数</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9udW1iZXIiOiJhZG1pbiIsImlhdCI6MTYyNjI0OTEyNCwiZXhwIjoxNjI2MjUyNzI0fQ.J4QH3MSDmVlQpKsNhpa6MLf1lT5_oKeCmPWfRhMkeGM\",\n    \"id_number\":\"test\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"查询失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "public_course_score",
            "description": "<p>公共课成绩</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_course_score",
            "description": "<p>专业课成绩</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "[\n    {\n        \"statu\": 1,\n        \"msg\": \"查询成功\"\n    },\n    {\n        \"public_course_score\": \"88\",\n        \"major_course_score\": \"88\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "考生组",
    "name": "PostUserAchievement",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/user/achievement"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user/admission/statu",
    "title": "查询录取状态",
    "group": "考生组",
    "description": "<p>查询录取状态</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9udW1iZXIiOiJhZG1pbiIsImlhdCI6MTYyNjI0OTEyNCwiZXhwIjoxNjI2MjUyNzI0fQ.J4QH3MSDmVlQpKsNhpa6MLf1lT5_oKeCmPWfRhMkeGM\",\n    \"id_number\":\"test\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"查询失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "enroll",
            "description": "<p>录取状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "[\n    {\n        \"statu\": 1,\n        \"msg\": \"查询成功\"\n    },\n    {\n        \"enroll\": \"已录取\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "考生组",
    "name": "PostUserAdmissionStatu",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/user/admission/statu"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user/adult/statu",
    "title": "查询考生信息审核状态",
    "group": "考生组",
    "description": "<p>查询考生信息审核状态</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9udW1iZXIiOiJhZG1pbiIsImlhdCI6MTYyNjI0OTEyNCwiZXhwIjoxNjI2MjUyNzI0fQ.J4QH3MSDmVlQpKsNhpa6MLf1lT5_oKeCmPWfRhMkeGM\",\n    \"id_number\":\"test\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"查询失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "audit",
            "description": "<p>审核状态</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "[\n    {\n        \"statu\": 1,\n        \"msg\": \"查询成功\"\n    },\n    {\n        \"audit\": \"审核暂未通过\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "考生组",
    "name": "PostUserAdultStatu",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/user/adult/statu"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user/information",
    "title": "查询考生信息",
    "group": "考生组",
    "description": "<p>查询考生信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "\t{\n    \"token\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9udW1iZXIiOiJhZG1pbiIsImlhdCI6MTYyNjI1MDQ1NCwiZXhwIjoxNjI2MjU0MDU0fQ.7xeopz3mTQ0Jl9dxFt43HnhNlPhUi_wFdT8s7XEwLwc\",\n    \"id_number\":\"test\"\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"查询失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "candidate_name",
            "description": "<p>考生姓名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "nation",
            "description": "<p>民族</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "home_address",
            "description": "<p>家庭住址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "political_outlook",
            "description": "<p>政治背景</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "birth_data",
            "description": "<p>生日</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "face",
            "description": "<p>登记照的base64编码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "postcode",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact_address",
            "description": "<p>联系地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emergency_contact",
            "description": "<p>紧急联系人</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "emergency_contact_mode",
            "description": "<p>紧急联系方式</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "graduate_school",
            "description": "<p>毕业院校</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "graduation_major",
            "description": "<p>毕业专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "graduation_school_code",
            "description": "<p>毕业院校代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "diploma_code",
            "description": "<p>毕业证编号</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registration_institutions",
            "description": "<p>报考院校</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "registered_institution_code",
            "description": "<p>报考院校代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major",
            "description": "<p>报考专业</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "major_code",
            "description": "<p>报考专业代码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "tcandidate_type",
            "description": "<p>考生类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "awards",
            "description": "<p>所获奖项</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "specialty",
            "description": "<p>特长</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>备注</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "[\n    {\n        \"statu\": 1,\n        \"msg\": \"查询成功\"\n    },\n    {\n        \"candidate_name\": \"test\",\n        \"id_number\": \"test\",\n        \"nation\": \"汉\",\n        \"home_address\": \"xx小区xx号\",\n        \"gender\": \"男\",\n        \"political_outlook\": \"群众\",\n        \"birth_data\": \"2001年3月14日\",\n        \"face\": \"xxxc\"\n    },\n    {\n        \"contact_number\": \"1887186xxxx\",\n        \"postcode\": \"4xxxx\",\n        \"contact_address\": \"xx小区xx号\",\n        \"emergency_contact\": \"test\",\n        \"emergency_contact_mode\": \"1xxxx\"\n    },\n    {\n        \"graduate_school\": \"xx学院\",\n        \"graduation_school_code\": \"1xxxx\",\n        \"graduation_major\": \"计算机应用技术\",\n        \"diploma_code\": \"110\",\n        \"registration_institutions\": \"xx大学\",\n        \"registered_institution_code\": \"1xxxx\",\n        \"major\": \"计算机科学技术\",\n        \"major_code\": \"080901\",\n        \"tcandidate_type\": \"普通\"\n    },\n    {\n        \"awards\": \"xx奖学金，xx获奖\",\n        \"specialty\": \"xx特长\",\n        \"remarks\": \"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "考生组",
    "name": "PostUserInformation",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/user/information"
      }
    ]
  },
  {
    "type": "POST",
    "url": "/user/upload",
    "title": "上传考生信息",
    "group": "考生组",
    "description": "<p>上传考生信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "candidate_name",
            "description": "<p>考生姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id_number",
            "description": "<p>身份证号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nation",
            "description": "<p>民族</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "home_address",
            "description": "<p>家庭住址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "gender",
            "description": "<p>性别</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "political_outlook",
            "description": "<p>政治背景</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "birth_data",
            "description": "<p>生日</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "face",
            "description": "<p>登记照的base64编码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_number",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "postcode",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "contact_address",
            "description": "<p>联系地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emergency_contact",
            "description": "<p>紧急联系人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "emergency_contact_mode",
            "description": "<p>紧急联系方式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "graduate_school",
            "description": "<p>毕业院校</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "graduation_major",
            "description": "<p>毕业专业</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "graduation_school_code",
            "description": "<p>毕业院校代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "diploma_code",
            "description": "<p>毕业证编号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registration_institutions",
            "description": "<p>报考院校</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "registered_institution_code",
            "description": "<p>报考院校代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "major",
            "description": "<p>报考专业</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "major_code",
            "description": "<p>报考专业代码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tcandidate_type",
            "description": "<p>考生类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "awards",
            "description": "<p>所获奖项</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "specialty",
            "description": "<p>特长</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "remarks",
            "description": "<p>备注</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "request-example",
          "content": "{\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZF9udW1iZXIiOiJhZG1pbiIsImlhdCI6MTYyNjI1MDQ1NCwiZXhwIjoxNjI2MjU0MDU0fQ.7xeopz3mTQ0Jl9dxFt43HnhNlPhUi_wFdT8s7XEwLwc\",\n    \"candidate_name\": \"test\",\n    \"id_number\": \"test\",\n    \"nation\": \"汉\",\n    \"home_address\": \"xx小区xx号\",\n    \"gender\": \"男\",\n    \"political_outlook\": \"群众\",\n    \"birth_data\": \"2001年3月14日\",\n    \"face\": \"xxxc\",\n    \"contact_number\": \"1887186xxxx\",\n    \"postcode\": \"xxxxx\",\n    \"contact_address\": \" xx小区xx号\",\n    \"emergency_contact\": \"test\",\n    \"emergency_contact_mode\": \"1xxxx\",\n    \"graduate_school\": \"xx学院\",\n    \"graduation_school_code\": \"1xxxx\",\n    \"graduation_major\": \"计算机应用技术\",\n    \"diploma_code\": \"110\",\n    \"registration_institutions\": \"xx大学\",\n    \"registered_institution_code\": \"1xxxx\",\n    \"major\": \"计算机科学技术\",\n    \"major_code\": \"080901\",\n    \"tcandidate_type\": \"普通\",\n    \"awards\": \"xx奖学金，xx获奖\",\n    \"specialty\": \"xx特长\",\n    \"remarks\": \"\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "error-example",
          "content": "{\n  \"statu\": 0,\n  \"msg\": \"上传失败\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int",
            "optional": false,
            "field": "statu",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>成功信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "success-example",
          "content": "{\n  \"statu\": 1,\n  \"msg\": \"上传成功\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/doc.js",
    "groupTitle": "考生组",
    "name": "PostUserUpload",
    "sampleRequest": [
      {
        "url": "http://111.229.179.231:8888/user/upload"
      }
    ]
  }
] });
