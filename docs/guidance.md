
# Guidance

## Interpretation

The [materiality tool](direct-operations.md) provides users with ratings of materiality for different economic activities. These activities are listed as [`ISIC group`](definitions.md#isic-group) and UNEP-WCMC [`production process`](definitions.md#production-process) pairs ([`group-process pairs`](definitions.md#group-process-pair)).

!!! info inline end "Pressure categories"
    - Terrestrial ecosystem use
    - Freshwater ecosystem use
    - Marine ecosystem use
    - Water use
    - Other resource use
    - GHG emissions
    - Non-GHG air pollutants
    - Water pollutants
    - Soil pollutants
    - Solid waste
    - Disturbances
    - Biological alterations

Each [`group-process pair`](definitions.md#group-process-pair) has been evaluated for material contributions toward 12 different **pressure categories**. A numerical indexed **pressure score** is attributed to each [`group-process pair`](definitions.md#group-process-pair) and **pressure category**. Additional values have also been added to indicate whether or not the score is significant, using a categorical **materiality rating**, based on a **materiality threshold**. This threshold is based on the full distribution of numerical scores for all of the base economic activities present in the underlying dataset.

The [materiality tool](direct-operations.md) currently facilitates the analysis of environmental impacts at the [`production process`](definitions.md#production-process) level. A **materiality rating** is associated with each [`production process`](definitions.md#production-process) indicating whether or not the activity is considered material in a given **pressure category**.

### Alternative

Companies may also complete their screening at the [`ISIC group`](definitions.md#isic-group) level using the [full materiality dataset](full-materiality-dataset.md). In this approach, scoring is based on an average of the relevant `production processes` associated with the [`ISIC group`](definitions.md#isic-group) (**average materiality**). 

!!! note
    For companies using this approach, if an economic activitiy at the [`ISIC group`](definitions.md#isic-group) level is not considered material, they must still include `production processes` within that group which are likely material for that pressure unless they can prove that the `production process` is not relevant to the their operations. 

<!-- This approach is offered to allow for flexibility in the assessment process and the ability to complete the screening more quickly. It is not intended to contradict the evaluation of an individual production process. The interface for anlaysis at this level (similar to tabs 4 and 5) may be created in further revisions of the tool. -->

### Pressure Scores
Scores for each activity range from 3 to 9. When there is not enough information to attribute a score, the tool will read ND for "No Data".

!!! note
    ND does not mean that it is not likely there is an impact. This value reflects the findings of the initial research effort that underpins this dataset.

### Economic activities represented in each rating
These activity ratings are considered to be those representing a company's direct operations only. Currently, upstream ratings can be retrieved by users based on the known connections between activities in a company's direct operations and those of their upstream suppliers.

### Thresholds for inclusion
For each pressure, the threshold for inclusion varies, depending on the distribution of scores for that pressure category. For instance, for land use change the threshold for inclusion is a rating of 8, vs. for water pollution the threshold for inclusion is a rating of 7. 

!!! warning "Known limitations of the dataset"

    - These ratings reflect typical impacts at sector level, and may not be specific enough to capture the reality every company. :memo: This is why **Step 1a** is followed directly by **Step 1b**, in which companies introduce their own data to refine the materiality assessment.
    - These ratings represent potential impacts and not actual impacts.
    - Development work around the ratings is ongoing, in particular to explore and implement improvements to upstream and downstream links using input-output modelling.

## Primary requirements & recommendations for use of this tool in Step 1a

Companies using this tool must screen their economic activities consistently at the production process (using the interface tabs for this tool) OR ISIC group (using the full materiality spreadsheet tab) and cannot mix the two approaches. 

For each pressure score greater than or equal to the materiality threshold, or marked as material, companies must consider that activity-pressure pair as requiring further screening through a value chain assessment (Step 1b) to gather data that will confirm whether targets are needed for impact management, and where these are likely to be most critical. 

If companies have evidence to support the exclusion of an activity-pressure pair flagged as material in this tool from their value chain assessment scope, they must submit appropriate data and justification consistent with Step 1 methods. Please see SBTN Step 1, section 2.6 for more detail on refining scores derived from this tool. 

Companies are recommended (but not required) to include activity-pressure pairs with 'no data' values, in their value chain assessment. Companies that already have data they can use to assess the materiality of an activity for a given pressure are recommended to submit data justifying the inclusion or exclusion of that pairing from the value chain assessment.

## Pressure categories in scope for v1

Of the pressure categories included in the Materiality Screening Tool, only the following are considered to be 'in scope' for the v1 SBTN methods, released in 2023:
- Terrestrial ecosystem use (Land use and land use change)
- Water use
- GHG emissions
- Water pollutants
- Soil pollutants

To set targets using the v1 SBTN methods, companies will be required to complete, at a minimum, a materiality screening of these five pressure categories. Screening of the additional seven categories within the current SBTN full pressure scope, as well as any other categories is encouraged but not required.

## Materiality of pressures in this tool (2023)

In this version of the tool, the material of each activity's contribution towards each pressure is evaluated in relation to all other activities' contributions toward that pressure category. As an example, the materiality of the contributions of the activity 'Construction' toward terrestrial ecosystem use and use change are evaluated in relation to all other activities, including 'Crop growing' as well as 'Telecommunications.' 

For each of the pressure categories included in the Materiality Screening Tool, a threshold of materiality was derived. When activities are shown to have an indexed pressure score greater than or equal to the threshold (≥), they are said to be 'material' and require further assessment in the SBTN Step 1 method. Activities that do not surpass that materiality threshold in any pressure category are not required for further assessment. This threshold is the median of the distribution of values for a given pressure category.

Materiality thresholds for production processes (2023)
- Terrestrial ecosystem use: 8
- Freshwater ecosystem use: 8
- Marine ecosystem use: 8
- Water use: 8
- Other resource use: 8 
- GHG emissions: 9
- Non-GHG air pollutants: 7
- Water pollutants: 7
- Soil pollutants: 6
- Solid waste: 7
- Disturbances: 7
- Biological alterations: 6

Evaluating the pressures relative to one another
The range of threshold values above reflects the distribution of indexed scores within each pressure category. Users must interpret these scores indepentently for each pressure and not compare across pressure cagegories. As can be seen in the full materiality dataset, and materiality tab, the contributions of economic activities toward some environmental pressures are much better documented than others and the interpretation of impacts for different pressures may also be categorized differently. Also note that as described in the methodology "no data" values do not necessarily correspond to low impacts.

## Notes on differences in scores, for users familiar with earlier versions of this tool
- In this version, there are unique thresholds for materiality provided for each pressure category, instead of a one-size-fits-all across the tool. This change more accurately reflects the importance of addressing impacts associated with different activities for a given pressure
-This revision includes adjustments to the concordance table within the tool, updates to the threshold values, and screening available at the ISIC Group or production process level.