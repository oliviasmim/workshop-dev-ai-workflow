#!/bin/bash

# Script to attach a file to a Jira issue
# Usage: ./attach_to_jira.sh SCRUM-1 /path/to/image.png

ISSUE_KEY="$1"
FILE_PATH="$2"
FILE_NAME=$(basename "$FILE_PATH")

# Hard-code Jira credentials from mcp.json
JIRA_URL="https://iasmim-ai-wkp.atlassian.net"
JIRA_USERNAME="iasmimoliveira10@hotmail.com"
JIRA_API_TOKEN="ATAT3xFfGF0TWEMT_tQAXkbZ3EQZIrm4Tn8Bp-Uxw2guYMysadl5c6fcAUm-1AoL1u-sZI5_X2o03jr_CxoNUanXBRUaio7En3TJvFh7uHdcB5KK5kmNvex8jPYZMXJkA_pHvQnZMVWXv1DJ8cZ-1LILRMPjwmaqZeloLCIpxShw5joPvSQQqQ=BB8740D6"

echo "Uploading $FILE_PATH to Jira issue $ISSUE_KEY"
curl -D- \
  -u "$JIRA_USERNAME:$JIRA_API_TOKEN" \
  -X POST \
  -H "X-Atlassian-Token: no-check" \
  -F "file=@$FILE_PATH" \
  "$JIRA_URL/rest/api/2/issue/$ISSUE_KEY/attachments"

echo -e "\nAttachment process completed"
