interface DateRange{
    startDateFormatted: string,
    endDateFormatted: string
}

export let getFormattedDateRange = (start: string, end: string): DateRange =>{
    let startDateFormatted = new Date(start).toLocaleString('en', { year: 'numeric', month: 'short' });
    let endDateFormatted = end != null ? new Date(end).toLocaleString('en', { year: 'numeric', month: 'short' }) : 'Present';
    return {startDateFormatted, endDateFormatted}
}