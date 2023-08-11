
# Overview

This documentation is based on the [SBTN Materiality Screening Tool](https://sciencebasedtargetsnetwork.org/wp-content/uploads/2023/05/SBTN-Materiality-Screening-Tool-v1.xlsx) developed by UNEP-WCMC, BCG and SBTN. It corresponds to the version `v1 May 2023` of the tool.

The aim is to help users carry out a first screening of the types of environmental impacts that are potentially materially relevant to their sector and their company's activities.

!!! info "SBTN"
    The initial screening process corresponds to **Step 1a** of the SBTN guidance. During the subsequent steps of the SBTN method, companies are expected to refine their understanding of environmental and societal materiality and gather more precise and accurate information to quantify their environmental impacts.

<!-- !!! note
    This tool is currently in its 'beta' form. Functionalities, like the screening of  pressures in a company's upstream, are not currently available. Updates are expected in the near future. -->

## Features

-   :material-tools:{ .lg .middle } __Exploration Tool__

    Select [`ISIC groups`](definitions.md#isic-group) and explore their corresponding [`production processes'`](definitions.md#production-process) materiality scores and ratings for each pressure category

    [:octicons-arrow-right-24: Tool](direct-operations.md)

    ---

-   :material-database:{ .lg .middle } __Full Dataset__

    Consult full materiality dataset and explore the materiality scores and ratings for each pressure category

    [:octicons-arrow-right-24: Dataset](full-materiality-dataset.md)

    ---

<!-- TODO -->
<!-- -   :material-format-font:{ .lg .middle } __Other Classifications__

    If necessary, translate the materiality tool, currently in the International Standard Industrial Classification of All Economic Activities (ISIC) into other classifications.

    [:octicons-arrow-right-24: Classifications](#)

    --- -->



## Outline
This documentation comprises 9 pages:

1. ReadMe 1 - Overview: Preview of the content in this tool, context of development, how to use and interpret, and credits for development. 
2. ReadMe 2 - Interpretation guidance: a complete overview of the content of the tool, including guidance on primary requirements and recommendations for use of the tool in Step 1a.
3. ReadMe 2  -  Methodology: a summary of the methodology used to prepare the materiality tool, including useful definitions and an explanation of how ratings were derived.
4. Materiality - Direct Operations: Provides 'pressure scores' and 'materiality ratings' for each economic activity, for each pressure. Using the slicer widget on the lefthand side of the sheet, users can select the economic activities they are interested in (described by ISIC Group or Production Process).
5. Summary by Activities: Summary sheet automatically populates according to inputs in the Materiality sheet. Companies can use this sheet to review the number of pressures that need to assessed, per activity, further in the value chain assessment. This sheet can also be used by companies as the output template for Step 1a. 
6. Materiality - Upstream: Under development. Once available, this sheet will automatically populate based on the activities selected in the direct operations sheet. Upstream sectors will be indentified based on known connections between economic activities reflected in economic trade data.
7. Full materiality dataset: Dataset derived by pairing the production processes from the ENCORE tool with ISIC group categories. 
8. Base data for materiality rule: This sheet includes just the 'production process' categories and the scores associated with these, which were used to calculate the materiality threshold for each pressure category. 
9.  ISIC Detail: Detail detail of the ISIC framework to help companies determine the appropriate classifications to use.
10. Crosswalk ISIC - NACE - GICS: Resource for companies familiar with alternative economic classifications; this table can be used to translate any ISIC class into its equivalent(s) in the Global Industry Classification Standard (GICS) or Statistical Classification of Economic Activities in the European Community (NACE) classification.



## Interpreting the results 
The tool provides users with ratings of materiality for different economic activities. These activities are listed as 'ISIC Group' and UNEP-WCMC 'Production Process' pairs ('Group-Process pairs').  

Each Group-Process pair has been evaluated for material contributions toward 12 different pressure categories (aligned to the categories of IPBES direct drivers). The values in this tool reflect the numerical indexed 'pressure score' attributed to each economy activity (by Group-Process pair), for each pressure category. Additional columns have also been added to indicate whether or not the score is significant, using a categorical 'materiality rating,' based on a materiality threshold. This threshold is based on the full distribution of numerical scores for all of the base economic activities present in the underlying dataset for this tool (see tab: Methodology). For each pressure score above the materiality threshold, or marked as material, that activity should be considered material in that pressure category. 

SBTN guidance on interpretation is to include any activities with material contributions towards key pressure categories based on the Step 1a Materiality Screening, using the Materiality Screening Tool or flexible screening approach, in the value chain assessment (Step 1b).  Companies that can submit evidence to SBTN (appropriate data and justification) contradicting the findings of the Materiality Screening tool must apply the rules found within the Step 1 methods. This evidence must be approved by SBTN validators to be used in a company's target setting with SBTN and, if approved, will be used to revise and improve the evidence based for the Materiality Screenign tool in subsequent releases.

Economic activities represented in each rating: These activity ratings are considered to be those representing a company's direct operations only. Currently, upstream ratings are generated based on the known connections between activities in a company's direct operations and those of their upstream suppliers.

Range of values in the tool: Ratings for each activity range from 3-9, with 3 being the lowest, and 9 being the highest. When there is not enough information to attribute a rating, the tool will read ND for "No Data". Please note: no data does not mean that there is no environmental impact associated with that activity. 

Thresholds for inclusion: For each pressure, the threshold for inclusion varies, depending on the distribution of scores for that pressure category. For instance, for land use change the threshold for inclusion is a rating of 8, vs. for water pollution the threshold for inclusion is a rating of 7. 

Please note that there are limitations to this rating system:
- these ratings only represent potential impacts (not actual impacts)
- development work around the ratings is ongoing, in particular to explore and implement improvements to upstream and downstream links using input-output modelling.