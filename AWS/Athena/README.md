# Implementation of Hybrid Mechanism of SRE Logging

# V3 Logging - Athena Usage

1. Preview Athena tables

```
SELECT *FROM "sre_v3_lambda_logs_athena_db"."lambda_logs_all_default"limit 10;
```

2. To view the logs for a particular lambda function for a particular day

```
SELECT *FROM "sre_v3_lambda_logs_athena_db"."lambda_logs_all_default"WHERE functionname = 'dbaas-price-review-int-eip-lambda'    AND year = 2022    AND month = 6    AND day = 3LIMIT 10;
```

3. To view all logs for a particular aws-request-id for a particular function for a particular day

```
SELECT *FROM "sre_v3_lambda_logs_athena_db"."lambda_logs_all_default"WHERE functionname = 'dbaas-price-review-int-eip-lambda'    AND year = 2022    AND month = 6    AND day = 3    AND "awsrequestid" = '5f417784-ab9a-492d-83ad-dbd537d866cd';
```

4. To view all the logs for a particular aws-request-id when you are not sure about the day of execution

```
SELECT *FROM "sre_v3_lambda_logs_athena_db"."lambda_logs_all_default"WHERE functionname = 'dbaas-price-review-int-eip-lambda'    AND year = 2022    AND month = 6    AND (        day = 2        OR day = 3        OR day = 4    )    AND "awsrequestid" = '5f417784-ab9a-492d-83ad-dbd537d866cd';
```

5. To view a particular log-type logs

```
SELECT *FROM "sre_v3_lambda_logs_athena_db"."lambda_logs_all_default"WHERE functionname = 'dbaasaeroplanpromotion-api-int-uploader-lambda'    AND year = 2022    AND month = 6    AND day = 3    AND "sre_logtype" = 'Request'ORDER BY "athenatimestamp" DESC;
```

6. To view specific fields values

```
SELECT athenatimestamp,    "message"FROM "sre_v3_lambda_logs_athena_db"."lambda_logs_all_default"WHERE functionname = 'dbaasaeroplanpromotion-api-int-uploader-lambda'    AND year = 2022    AND month = 6    AND day = 3ORDER BY "athenatimestamp" DESC;
```

7. To search for a particular log using a keyword present in message field

```
SELECT *FROM "sre_v3_lambda_logs_athena_db"."lambda_logs_all_default"WHERE functionname = 'dbaas-price-review-int-eip-lambda'    AND year = 2022    AND month = 6    AND day = 3    AND "message" LIKE '%Service final response%'LIMIT 10;
```

8. To view for all the start logs for a lambda sorted by time stamp in descending order

```
SELECT *FROM "sre_v3_lambda_logs_athena_db"."lambda_logs_all_default"WHERE functionname = 'dbaasaeroplanpromotion-api-int-uploader-lambda'    AND year = 2022    AND month = 6    AND day = 3    AND "sre_logtype" = 'start'ORDER BY "athenatimestamp" DESC;
```

9. To view the count of logs related to particular aws-request-id (conditions can be updated/added as required)

```
SELECT count(*)FROM "sre_v3_lambda_logs_athena_db"."lambda_logs_all_default"WHERE functionname = 'dbaas-price-review-int-eip-lambda'    AND year = 2022    AND month = 6    AND day = 3    AND "awsrequestid" = '5f417784-ab9a-492d-83ad-dbd537d866cd';
```

10. To view the logs in a particular time-range for a particular lambda for a particular day

```
SELECT *FROM "sre_v3_lambda_logs_athena_db"."lambda_logs_all_default"WHERE functionname = 'dbaas-price-review-int-eip-lambda'    AND year = 2022    AND month = 6    AND day = 3    AND "athenatimestamp" BETWEEN timestamp '2022-06-03 06:00:00.000' AND timestamp '2022-06-03 08:30:30.567';
```
