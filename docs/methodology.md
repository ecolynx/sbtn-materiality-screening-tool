
# Methodology

## Tool and data development approach

1) The purpose and need: The Materiality Screening Tool was developed for SBTN to facilitate an initial materiality screening that companies could use to determine which economic activities and pressures likely require science-based targets for nature. This tool responds to a need identified by companies to qualitatively assess impacts using a consistent methodology across pressures and economic activities with a value chain. 

2) Value chain coverage: For the first release in 2023, the tool functionality will encompass activities in companies’ direct operations and upstreams. Downstream activities will not be included in the 2023 iterations of the tool. Please note that this version of the tool for beta testing only contains scores for direct operations. Further detail on the methods for deriving pressure scores for companies' upstream and direct operations activities will be provided, see below.

3) Pressure categories: This tool presents materiality ratings for 12 pressure categories, grouped by five nature-related issue areas. These five issue areas are based on the drivers of nature loss defined by IPBES in the 2019 Global Assessment: land/water/sea use change, resource exploitation, climate change, pollution, and invasive alien species & other. As users familiar with the SBTN guidance will know, SBTs for nature are designed as mechanisms to address these key pressures and reduce and halt the loss of nature. Providing companies a quick view of their contributions towards these pressures is therefore a key function of the tool. 

4a) Classification of economic activities: Business activities in the tool are classified according to the International Standard Industrial Classification of All Economic Activities (ISIC), Revision 4 (published in 2008). ISIC is the United Nations’ international reference classification of productive activities. ISIC is subdivided in a hierarchical, four-level structure. The categories at the highest level are called sections (e.g. Manufacturing), followed by divisions (e.g. Manufacture of Textiles) and groups (e.g. Manufacture of Other Textiles). Further detail on the economic activities included in each ISIC category can be found at https://unstats.un.org/unsd/publication/seriesm/seriesm_4rev4e.pdf.

4b) Concordance of economic activities: Because this tool builds from the ENCORE dataset developed by UNEP-WCMC, which uses a unique economic activity categorization called Production Processes, all Production Processes have been linked to ISIC group categories in order to ascertain the materiality ratings shown in the Materiality Screening Tool. The linking of the Production Processes to ISIC group categories, called concordance, was performed manually by UNEP-WCMC and SBTN teams and supported with background research on the economic activities.

5a) Pressure scores and materiality ratings: For each pressure category and ISIC Group-Production Process pair, an 'indexed pressure score' and 'materiality rating' are given. The indexed pressure scores give an indication of the expected contribution of a given economic activity to each pressure; the materiality rating evaluates the significance of this activity's pressure score in comparison to all other economic activities. 

5b) Criteria for pressure scores: The indexed pressure scores for each ISIC Group-Production Process pair are independently derived based on the same criteria and are therefore comparable across ISIC classes. There are 6 possible index scores, ranging from 3-9. The indexed scores are based on an evaluation by the ENCORE team of the activities' contributions to the different pressure categories according to three components of materiality: (1) Magnitude, (2) Frequency, and (3) Timeframe (latency). Each component was evaluated along a scale of 1-3, with 1 being the lowest and 3 being the highest. When there is not enough information to attribute a rating, the tool will read ND for "No Data".

5c) Pressure-specific materiality thresholds: The materiality ratings are specific to each pressure, and the unique materiality threshold for each of those categories. These ratings are expressed as a binary score (0 - non-material or 1 - material) which indicates the need for users to continue to assess this activity in the SBTN methodology (i.e. Step 1b) for a given pressure. Please see tab 2 - Interpretation guidance for the spread of scores for each pressure. 

6) Scores reflect activities for one value chain segment: All scores shown in the “Materiality - Direct Operations” only reflect the contribution of that specific activity to a pressure category, and do not include the contributions of activities upstream or downstream of that activity.
- Upstream ratings will be derived using EXIOBASE data and ENCORE materiality ratings. These data are not currently provided in the testing version but will be supplied for use with the V1 SBTs for Nature. See tab “Materiality - Upstream” for more information.
 - Downstream ratings are still under development and not anticipated to be provided with the V1 release of the MST.

## Scores & ratings - Direct operations

- For direct operations, ratings are based on the scientific and grey literature collated for the development of the ENCORE impacts database. These ratings were assigned based on three components of materiality: Frequency, Timeframe, and Severity.
- Further detail on component scores can be obtained through the ENCORE database.

## Scores & ratings - Upstream

 - We will generate scores for upstream by deriving the economic relationships between direct operations and upstream sectors using MRIO models (EXIOBASE). In this approach, a company's upstream pressure scores will be determined by the scores (from ENCORE) for sectors that are upstream of it.
 - Further detail pending completion of upstream analysis.


## Definition of pressure categories (from ENCORE)

TODO: *Note that this category (Terrestial ecosystem use) is referred to as "Land use and land use change" in the SBTN framework.

{{ read_excel('./SBTN-Materiality-Screening-Tool-v1.xlsx', engine='openpyxl', sheet_name="3 - Methodology", usecols="O:Q", skiprows=4, nrows=12, keep_default_na=False) }}

