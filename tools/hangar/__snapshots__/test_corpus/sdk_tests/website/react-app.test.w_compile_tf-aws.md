# [react-app.test.w](../../../../../../examples/tests/sdk_tests/website/react-app.test.w) | compile | tf-aws

## inflight.$Closure1-1.js
```js
module.exports = function({  }) {
  class $Closure1 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      return ({"body": "hi!","status": 200});
    }
  }
  return $Closure1;
}

```

## inflight.$Closure2-1.js
```js
module.exports = function({ $api_url, $http_Util, $preflightVariable, $website_url }) {
  class $Closure2 {
    constructor({  }) {
      const $obj = (...args) => this.handle(...args);
      Object.setPrototypeOf($obj, this);
      return $obj;
    }
    async handle() {
      {((cond) => {if (!cond) throw new Error("assertion failed: http.get(website.url).ok")})((await $http_Util.get($website_url)).ok)};
      const wingEnv = ((await $http_Util.get(($website_url + "/wing.js"))).body ?? "");
      const expected = String.raw({ raw: ["// This file is generated by wing\nwindow.wingEnv = {\n  \"apiUrl\": \"", "\",\n  \"anotherEnvVar\": \"", "\"\n};"] }, $api_url, $preflightVariable);
      {((cond) => {if (!cond) throw new Error("assertion failed: wingEnv == expected")})((((a,b) => { try { return require('assert').deepStrictEqual(a,b) === undefined; } catch { return false; } })(wingEnv,expected)))};
    }
  }
  return $Closure2;
}

```

## main.tf.json
```json
{
  "//": {
    "metadata": {
      "backend": "local",
      "stackName": "root",
      "version": "0.17.0"
    },
    "outputs": {
      "root": {
        "Default": {
          "cloud.TestRunner": {
            "TestFunctionArns": "WING_TEST_RUNNER_FUNCTION_ARNS"
          }
        }
      }
    }
  },
  "data": {
    "aws_iam_policy_document": {
      "exReactApp_exReactApp-host_AllowDistributionReadOnly_449FAF0F": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/ex.ReactApp/ex.ReactApp-host/AllowDistributionReadOnly",
            "uniqueId": "exReactApp_exReactApp-host_AllowDistributionReadOnly_449FAF0F"
          }
        },
        "statement": [
          {
            "actions": [
              "s3:GetObject"
            ],
            "condition": [
              {
                "test": "StringEquals",
                "values": [
                  "${aws_cloudfront_distribution.exReactApp_exReactApp-host_Distribution_FE9291B1.arn}"
                ],
                "variable": "AWS:SourceArn"
              }
            ],
            "principals": [
              {
                "identifiers": [
                  "cloudfront.amazonaws.com"
                ],
                "type": "Service"
              }
            ],
            "resources": [
              "${aws_s3_bucket.exReactApp_exReactApp-host_WebsiteBucket_FE5E163A.arn}/*"
            ]
          }
        ]
      }
    },
    "aws_region": {
      "Region": {
        "//": {
          "metadata": {
            "path": "root/Default/Region",
            "uniqueId": "Region"
          }
        }
      }
    }
  },
  "output": {
    "WING_TEST_RUNNER_FUNCTION_ARNS": {
      "value": "[]"
    }
  },
  "provider": {
    "aws": [
      {}
    ]
  },
  "resource": {
    "aws_api_gateway_deployment": {
      "cloudApi_api_deployment_545514BF": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Api/api/deployment",
            "uniqueId": "cloudApi_api_deployment_545514BF"
          }
        },
        "lifecycle": {
          "create_before_destroy": true
        },
        "rest_api_id": "${aws_api_gateway_rest_api.cloudApi_api_2B334D75.id}",
        "triggers": {
          "redeployment": "${sha256(aws_api_gateway_rest_api.cloudApi_api_2B334D75.body)}"
        }
      }
    },
    "aws_api_gateway_rest_api": {
      "cloudApi_api_2B334D75": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Api/api/api",
            "uniqueId": "cloudApi_api_2B334D75"
          }
        },
        "body": "{\"openapi\":\"3.0.3\",\"paths\":{\"/\":{\"get\":{\"operationId\":\"get\",\"responses\":{\"200\":{\"description\":\"200 response\",\"content\":{}}},\"parameters\":[],\"x-amazon-apigateway-integration\":{\"uri\":\"arn:aws:apigateway:${data.aws_region.Region.name}:lambda:path/2015-03-31/functions/${aws_lambda_function.cloudApi_cloudApi-OnRequest-cdafee6e_A6C8366F.arn}/invocations\",\"type\":\"aws_proxy\",\"httpMethod\":\"POST\",\"responses\":{\"default\":{\"statusCode\":\"200\"}},\"passthroughBehavior\":\"when_no_match\",\"contentHandling\":\"CONVERT_TO_TEXT\"}}},\"/{proxy+}\":{\"x-amazon-apigateway-any-method\":{\"produces\":[\"application/json\"],\"x-amazon-apigateway-integration\":{\"type\":\"mock\",\"requestTemplates\":{\"application/json\":\"\\n                {\\\"statusCode\\\": 404}\\n              \"},\"passthroughBehavior\":\"never\",\"responses\":{\"404\":{\"statusCode\":\"404\",\"responseParameters\":{\"method.response.header.Content-Type\":\"'application/json'\"},\"responseTemplates\":{\"application/json\":\"{\\\"statusCode\\\": 404, \\\"message\\\": \\\"Error: Resource not found\\\"}\"}},\"default\":{\"statusCode\":\"404\",\"responseParameters\":{\"method.response.header.Content-Type\":\"'application/json'\"},\"responseTemplates\":{\"application/json\":\"{\\\"statusCode\\\": 404, \\\"message\\\": \\\"Error: Resource not found\\\"}\"}}}},\"responses\":{\"404\":{\"description\":\"404 response\",\"headers\":{\"Content-Type\":{\"type\":\"string\"}}}}}}}}",
        "name": "api-c895068c"
      }
    },
    "aws_api_gateway_stage": {
      "cloudApi_api_stage_BBB283E4": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Api/api/stage",
            "uniqueId": "cloudApi_api_stage_BBB283E4"
          }
        },
        "deployment_id": "${aws_api_gateway_deployment.cloudApi_api_deployment_545514BF.id}",
        "rest_api_id": "${aws_api_gateway_rest_api.cloudApi_api_2B334D75.id}",
        "stage_name": "prod"
      }
    },
    "aws_cloudfront_distribution": {
      "exReactApp_exReactApp-host_Distribution_FE9291B1": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/ex.ReactApp/ex.ReactApp-host/Distribution",
            "uniqueId": "exReactApp_exReactApp-host_Distribution_FE9291B1"
          }
        },
        "default_cache_behavior": {
          "allowed_methods": [
            "GET",
            "HEAD"
          ],
          "cached_methods": [
            "GET",
            "HEAD"
          ],
          "compress": true,
          "default_ttl": 3600,
          "forwarded_values": {
            "cookies": {
              "forward": "none"
            },
            "query_string": false
          },
          "max_ttl": 86400,
          "min_ttl": 0,
          "target_origin_id": "s3Origin",
          "viewer_protocol_policy": "redirect-to-https"
        },
        "default_root_object": "index.html",
        "enabled": true,
        "origin": [
          {
            "domain_name": "${aws_s3_bucket.exReactApp_exReactApp-host_WebsiteBucket_FE5E163A.bucket_regional_domain_name}",
            "origin_access_control_id": "${aws_cloudfront_origin_access_control.exReactApp_exReactApp-host_CloudfrontOac_B85B4BF9.id}",
            "origin_id": "s3Origin"
          }
        ],
        "price_class": "PriceClass_100",
        "restrictions": {
          "geo_restriction": {
            "locations": [],
            "restriction_type": "none"
          }
        },
        "viewer_certificate": {
          "cloudfront_default_certificate": true
        }
      }
    },
    "aws_cloudfront_origin_access_control": {
      "exReactApp_exReactApp-host_CloudfrontOac_B85B4BF9": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/ex.ReactApp/ex.ReactApp-host/CloudfrontOac",
            "uniqueId": "exReactApp_exReactApp-host_CloudfrontOac_B85B4BF9"
          }
        },
        "name": "ex-React-c8e2f35e-cloudfront-oac",
        "origin_access_control_origin_type": "s3",
        "signing_behavior": "always",
        "signing_protocol": "sigv4"
      }
    },
    "aws_cloudwatch_log_group": {
      "cloudApi_cloudApi-OnRequest-cdafee6e_CloudwatchLogGroup_B50BDB26": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Api/cloud.Api-OnRequest-cdafee6e/CloudwatchLogGroup",
            "uniqueId": "cloudApi_cloudApi-OnRequest-cdafee6e_CloudwatchLogGroup_B50BDB26"
          }
        },
        "name": "/aws/lambda/cloud-Api-OnRequest-cdafee6e-c8147384",
        "retention_in_days": 30
      }
    },
    "aws_iam_role": {
      "cloudApi_cloudApi-OnRequest-cdafee6e_IamRole_4382C442": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Api/cloud.Api-OnRequest-cdafee6e/IamRole",
            "uniqueId": "cloudApi_cloudApi-OnRequest-cdafee6e_IamRole_4382C442"
          }
        },
        "assume_role_policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Action\":\"sts:AssumeRole\",\"Principal\":{\"Service\":\"lambda.amazonaws.com\"},\"Effect\":\"Allow\"}]}"
      }
    },
    "aws_iam_role_policy": {
      "cloudApi_cloudApi-OnRequest-cdafee6e_IamRolePolicy_8BF9C89F": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Api/cloud.Api-OnRequest-cdafee6e/IamRolePolicy",
            "uniqueId": "cloudApi_cloudApi-OnRequest-cdafee6e_IamRolePolicy_8BF9C89F"
          }
        },
        "policy": "{\"Version\":\"2012-10-17\",\"Statement\":[{\"Effect\":\"Allow\",\"Action\":\"none:null\",\"Resource\":\"*\"}]}",
        "role": "${aws_iam_role.cloudApi_cloudApi-OnRequest-cdafee6e_IamRole_4382C442.name}"
      }
    },
    "aws_iam_role_policy_attachment": {
      "cloudApi_cloudApi-OnRequest-cdafee6e_IamRolePolicyAttachment_5383D6A2": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Api/cloud.Api-OnRequest-cdafee6e/IamRolePolicyAttachment",
            "uniqueId": "cloudApi_cloudApi-OnRequest-cdafee6e_IamRolePolicyAttachment_5383D6A2"
          }
        },
        "policy_arn": "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole",
        "role": "${aws_iam_role.cloudApi_cloudApi-OnRequest-cdafee6e_IamRole_4382C442.name}"
      }
    },
    "aws_lambda_function": {
      "cloudApi_cloudApi-OnRequest-cdafee6e_A6C8366F": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Api/cloud.Api-OnRequest-cdafee6e/Default",
            "uniqueId": "cloudApi_cloudApi-OnRequest-cdafee6e_A6C8366F"
          }
        },
        "architectures": [
          "arm64"
        ],
        "environment": {
          "variables": {
            "WING_FUNCTION_NAME": "cloud-Api-OnRequest-cdafee6e-c8147384",
            "WING_TARGET": "tf-aws"
          }
        },
        "function_name": "cloud-Api-OnRequest-cdafee6e-c8147384",
        "handler": "index.handler",
        "publish": true,
        "role": "${aws_iam_role.cloudApi_cloudApi-OnRequest-cdafee6e_IamRole_4382C442.arn}",
        "runtime": "nodejs18.x",
        "s3_bucket": "${aws_s3_bucket.Code.bucket}",
        "s3_key": "${aws_s3_object.cloudApi_cloudApi-OnRequest-cdafee6e_S3Object_5DAAA0EF.key}",
        "timeout": 60,
        "vpc_config": {
          "security_group_ids": [],
          "subnet_ids": []
        }
      }
    },
    "aws_lambda_permission": {
      "cloudApi_api_permission-GET-c2e3ffa8_37FA5D89": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Api/api/permission-GET-c2e3ffa8",
            "uniqueId": "cloudApi_api_permission-GET-c2e3ffa8_37FA5D89"
          }
        },
        "action": "lambda:InvokeFunction",
        "function_name": "${aws_lambda_function.cloudApi_cloudApi-OnRequest-cdafee6e_A6C8366F.function_name}",
        "principal": "apigateway.amazonaws.com",
        "source_arn": "${aws_api_gateway_rest_api.cloudApi_api_2B334D75.execution_arn}/*/GET/",
        "statement_id": "AllowExecutionFromAPIGateway-GET-c2e3ffa8"
      }
    },
    "aws_s3_bucket": {
      "Code": {
        "//": {
          "metadata": {
            "path": "root/Default/Code",
            "uniqueId": "Code"
          }
        },
        "bucket_prefix": "code-c84a50b1-"
      },
      "exReactApp_exReactApp-host_WebsiteBucket_FE5E163A": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/ex.ReactApp/ex.ReactApp-host/WebsiteBucket",
            "uniqueId": "exReactApp_exReactApp-host_WebsiteBucket_FE5E163A"
          }
        },
        "bucket_prefix": "ex-reactapp-host-c8e2f35e-",
        "force_destroy": false
      }
    },
    "aws_s3_bucket_policy": {
      "exReactApp_exReactApp-host_DistributionS3BucketPolicy_2BAB64DC": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/ex.ReactApp/ex.ReactApp-host/DistributionS3BucketPolicy",
            "uniqueId": "exReactApp_exReactApp-host_DistributionS3BucketPolicy_2BAB64DC"
          }
        },
        "bucket": "${aws_s3_bucket.exReactApp_exReactApp-host_WebsiteBucket_FE5E163A.id}",
        "policy": "${data.aws_iam_policy_document.exReactApp_exReactApp-host_AllowDistributionReadOnly_449FAF0F.json}"
      }
    },
    "aws_s3_bucket_website_configuration": {
      "exReactApp_exReactApp-host_BucketWebsiteConfiguration_BDF89618": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/ex.ReactApp/ex.ReactApp-host/BucketWebsiteConfiguration",
            "uniqueId": "exReactApp_exReactApp-host_BucketWebsiteConfiguration_BDF89618"
          }
        },
        "bucket": "${aws_s3_bucket.exReactApp_exReactApp-host_WebsiteBucket_FE5E163A.bucket}",
        "index_document": {
          "suffix": "index.html"
        }
      }
    },
    "aws_s3_object": {
      "cloudApi_cloudApi-OnRequest-cdafee6e_S3Object_5DAAA0EF": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/cloud.Api/cloud.Api-OnRequest-cdafee6e/S3Object",
            "uniqueId": "cloudApi_cloudApi-OnRequest-cdafee6e_S3Object_5DAAA0EF"
          }
        },
        "bucket": "${aws_s3_bucket.Code.bucket}",
        "key": "<ASSET_KEY>",
        "source": "<ASSET_SOURCE>"
      },
      "exReactApp_exReactApp-host_File--indexhtml_B6124CA6": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/ex.ReactApp/ex.ReactApp-host/File--index.html",
            "uniqueId": "exReactApp_exReactApp-host_File--indexhtml_B6124CA6"
          }
        },
        "bucket": "${aws_s3_bucket.exReactApp_exReactApp-host_WebsiteBucket_FE5E163A.bucket}",
        "content_type": "text/html; charset=utf-8",
        "depends_on": [
          "aws_s3_bucket.exReactApp_exReactApp-host_WebsiteBucket_FE5E163A"
        ],
        "key": "/index.html",
        "source": "<SOURCE>",
        "source_hash": "${filemd5(<SOURCE>)}"
      },
      "exReactApp_exReactApp-host_File--indexjs_212AAA99": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/ex.ReactApp/ex.ReactApp-host/File--index.js",
            "uniqueId": "exReactApp_exReactApp-host_File--indexjs_212AAA99"
          }
        },
        "bucket": "${aws_s3_bucket.exReactApp_exReactApp-host_WebsiteBucket_FE5E163A.bucket}",
        "content_type": "application/javascript; charset=utf-8",
        "depends_on": [
          "aws_s3_bucket.exReactApp_exReactApp-host_WebsiteBucket_FE5E163A"
        ],
        "key": "/index.js",
        "source": "<SOURCE>",
        "source_hash": "${filemd5(<SOURCE>)}"
      },
      "exReactApp_exReactApp-host_File-wingjs_43F0A844": {
        "//": {
          "metadata": {
            "path": "root/Default/Default/ex.ReactApp/ex.ReactApp-host/File-wing.js",
            "uniqueId": "exReactApp_exReactApp-host_File-wingjs_43F0A844"
          }
        },
        "bucket": "${aws_s3_bucket.exReactApp_exReactApp-host_WebsiteBucket_FE5E163A.bucket}",
        "content": "// This file is generated by wing\nwindow.wingEnv = {\n  \"apiUrl\": \"${aws_api_gateway_stage.cloudApi_api_stage_BBB283E4.invoke_url}\",\n  \"anotherEnvVar\": \"preflight variable\"\n};",
        "content_type": "text/javascript",
        "depends_on": [
          "aws_s3_bucket.exReactApp_exReactApp-host_WebsiteBucket_FE5E163A"
        ],
        "key": "wing.js"
      }
    }
  }
}
```

## preflight.js
```js
const $stdlib = require('@winglang/sdk');
const $plugins = ((s) => !s ? [] : s.split(';'))(process.env.WING_PLUGIN_PATHS);
const $outdir = process.env.WING_SYNTH_DIR ?? ".";
const $wing_is_test = process.env.WING_IS_TEST === "true";
const std = $stdlib.std;
const util = $stdlib.util;
const ex = $stdlib.ex;
const cloud = $stdlib.cloud;
const http = $stdlib.http;
class $Root extends $stdlib.std.Resource {
  constructor(scope, id) {
    super(scope, id);
    class $Closure1 extends $stdlib.std.Resource {
      constructor(scope, id, ) {
        super(scope, id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType(context) {
        return `
          require("./inflight.$Closure1-1.js")({
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure1Client = ${$Closure1._toInflightType(this)};
            const client = new $Closure1Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _getInflightOps() {
        return ["handle", "$inflight_init"];
      }
    }
    class $Closure2 extends $stdlib.std.Resource {
      constructor(scope, id, ) {
        super(scope, id);
        (std.Node.of(this)).hidden = true;
      }
      static _toInflightType(context) {
        return `
          require("./inflight.$Closure2-1.js")({
            $api_url: ${context._lift(api.url)},
            $http_Util: ${context._lift($stdlib.core.toLiftableModuleType(http.Util, "@winglang/sdk/http", "Util"))},
            $preflightVariable: ${context._lift(preflightVariable)},
            $website_url: ${context._lift(website.url)},
          })
        `;
      }
      _toInflight() {
        return `
          (await (async () => {
            const $Closure2Client = ${$Closure2._toInflightType(this)};
            const client = new $Closure2Client({
            });
            if (client.$inflight_init) { await client.$inflight_init(); }
            return client;
          })())
        `;
      }
      _getInflightOps() {
        return ["handle", "$inflight_init"];
      }
      _registerBind(host, ops) {
        if (ops.includes("handle")) {
          $Closure2._registerBindObject(api.url, host, []);
          $Closure2._registerBindObject(preflightVariable, host, []);
          $Closure2._registerBindObject(website.url, host, ["body", "ok"]);
        }
        super._registerBind(host, ops);
      }
    }
    const api = this.node.root.newAbstract("@winglang/sdk.cloud.Api",this,"cloud.Api");
    (api.get("/",new $Closure1(this,"$Closure1")));
    const website = this.node.root.newAbstract("@winglang/sdk.ex.ReactApp",this,"ex.ReactApp",{ projectPath: "./react-website", buildDir: "/build/public", useBuildCommand: true });
    const preflightVariable = "preflight variable";
    (website.addEnvironment("apiUrl",api.url));
    (website.addEnvironment("anotherEnvVar",preflightVariable));
    this.node.root.new("@winglang/sdk.std.Test",std.Test,this,"test:website is working",new $Closure2(this,"$Closure2"));
  }
}
const $App = $stdlib.core.App.for(process.env.WING_TARGET);
new $App({ outdir: $outdir, name: "react-app.test", rootConstruct: $Root, plugins: $plugins, isTestEnvironment: $wing_is_test, entrypointDir: process.env['WING_SOURCE_DIR'], rootId: process.env['WING_ROOT_ID'] }).synth();

```
