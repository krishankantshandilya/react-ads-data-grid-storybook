import { connectorTheme } from "akeneo-design-system";
import { Datagrid } from "react-ads-data-grid";
import rows from "../mockData";

const headers = [
  {
    name: "image",
    label: "Image",
    valueType: "image",
  },
  {
    name: "flight_number",
    label: "Flight number",
    isFilterable: true,
    isSortable: true,
    isExportable: true,
  },
  {
    name: "departure_airport",
    label: "Departure airport",
    isSortable: true,
    isExportable: true,
  },
  {
    name: "arrival_airport",
    label: "Arrival airport",
    isFilterable: true,
    isExportable: true,
  },
  {
    name: "departure_date",
    label: "Departure date",
    isFilterable: true,
    isExportable: true,
  },
  {
    name: "arrival_date",
    label: "Arrival date",
    isFilterable: true,
    isExportable: true,
  },
  {
    name: "passenger_name",
    label: "Passenger name",
    isExportable: true,
    isFilterable: true,
  },
];

export default {
  component: Datagrid,
  title: "Datagrid",
  tags: ["autodocs"],
};

export const Default = {
  args: {
    headers: headers,
    rows: rows,
    theme: connectorTheme,
  },
};

export const ServerSideSort = {
  args: {
    ...Default.args,
    isServerSideSortable: false,
    onSortChange: (props) => console.log(props),
  },
};

export const DraggableRows = {
  args: {
    ...Default.args,
    isDragAndDroppable: true,
    onReorder: (newIndices) => {
      console.log(newIndices);
    },
  },
};

export const SelectableAndToolbarActions = {
  args: {
    ...Default.args,
    isSelectable: true,
    overrideDatagridToolbarAction: false,
    datagridToolbarAction: [
      {
        component: ({ selection }) => {
          return (
            <Button level="secondary" onClick={() => console.log(selection)}>
              Custom Button
            </Button>
          );
        },
      },
    ],
  },
};

export const ScrollAndStickyHeaders = {
  args: {
    ...Default.args,
    tableHeaderSticky: 0,
    tableStyles: {
      height: "500px",
      overflow: "auto",
    },
  },
};

export const Pagination = {
  args: {
    ...Default.args,
    isPaginationAllowed: true,
    isServerSidePagination: false,
    paginationSticky: 0,
    onPageChange: (page) => {
      console.log(page);
    },
  },
};

export const SearchAndFilters = {
  args: {
    ...Default.args,
    isServerSideSearch: false,
    searchOnField: "flight_number",
    onSearchChange: (text) => {
      console.log(text);
    },
    isServerSideFiltering: false,
    onFilterChange: (filters) => {
      console.log(filters);
    },
    filterToolbarProps: {
      hideFilterToolbar: false,
      hideResultCount: false,
      hideColumnFiters: false,
    },
  },
};
