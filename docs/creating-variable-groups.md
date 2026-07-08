# Creating variable groups

Variable groups are optional, but will help organize the data for the user into specific subject of use categories. This will be particularly useful to the user in the case of data files that contain many variables and are not organized by topic (some flat files contain hundreds or even thousands of variables).

The Metadata Editor allows you to group variables found in various separate data files. For example, education data may be found in various locations and the disparate variables grouped together. Also, a same variable can belong to more than one group.

Variable groups are "virtual". The variables themselves are not moved or grouped. They remain untouched in the data files.

The variable groups will appear under a menu item "Data dictionary". The only reason for grouping variables is to allow users to easily locate variables related to their topic of interest. If your dataset contains very few variables, there is no justification for grouping them.

If you decide to create variable groups (and sub-groups if needed), make sure that ALL variables in the dataset belong to at least one group.

Variable groups also have their own DDI elements which include Type, Label, Text, Definition, Universe, and Notes. These elements are optional and will in most cases be left empty.

| Type | This is a controlled vocabulary<br>field. It best identifies the<br>manner the variables are grouped<br>together. This field is optional. |
| --- | --- |
| Label | The label used to identify the<br>group should be clear and relate<br>to the type chosen. If these are<br>grouped by subject, then the<br>subject should be clearly stated<br>etc. |
| Text | Include additional text to<br>clarify the reason or purpose for<br>grouping the variables. This<br>field is optional. |
| Definition | This optional field is used to<br>define the variable group. |
| Universe | This optional field defines the<br>universe relevant to the selected<br>grouped variables. The variables<br>for example can be grouped as<br>“Fertility Data” and the universe<br>restricted to women between the<br>ages of 15-49. |
| Notes | Additional space for further<br>optional explanatory notes. |
